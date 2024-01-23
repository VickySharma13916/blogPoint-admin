import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import ReactSelect from "react-select";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import NativeSelect from "../../components/Form/NativeSelect";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import { performPostUser } from "../../redux/actionCreators/userCreators";

const schema = yup
  .object({
    email: yup.string().required(),
    name: yup.string().required(),
    mobileNumber: yup.string().required(),
  })
  .required();

const AddUser = ({ submitting, width, handleAddUser, history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();

  const userTypeOptions = [
    {
      id: "admin",
      label: "Admin",
    },
    {
      id: "author",
      label: "Author",
    },
    {
      id: "viewer",
      label: "Viewer",
    },
  ];
  const [selectTypeValue, setSelectTypeValue] = useState(null);
  const userRequestForProposalOptions = [
    {
      id: "Active",
      label: "Active",
    },
    {
      id: "Inactive",
      label: "Inactive",
    },
  ];
  const [selectRFPValue, setSelectRFPValue] = useState(null);
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      isProposalRequest: selectRFPValue.label === "Active" ? true : false,
      status: data.status === "Active" ? true : false,
      type: selectTypeValue.label,
    };
    const result = await handleAddUser(newData);
    if (result.status === 200) {
      history.goBack();
    }
  };

  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "60%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Add User</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="name"
              name="name"
              label={"name"}
              {...register("name")}
              error={errors.name?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="email"
              id="Email"
              name="Email"
              label={"Email"}
              {...register("email")}
              error={errors.email?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="mobileNumber"
              name="mobileNumber"
              label={"mobileNumber"}
              {...register("mobileNumber")}
              error={errors.mobileNumber?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage mb-2">Select User Type</div>
            <ReactSelect
              options={userTypeOptions}
              value={selectTypeValue}
              onChange={setSelectTypeValue}
              placeHolder="Select User Type"
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage my-2">
              Select User Request For Proposal
            </div>
            <ReactSelect
              options={userRequestForProposalOptions}
              value={selectRFPValue}
              onChange={setSelectRFPValue}
              placeHolder="Select User Request For Proposal"
            />
          </Col>
          <Col xs={12} className="mt-2">
            <NativeSelect
              options={[
                {
                  id: "Active",
                  label: "Active",
                },
                {
                  id: "Inactive",
                  label: "Inactive",
                },
              ]}
              id="status"
              name="status"
              label="Select status"
              {...register("status")}
              error={errors.status?.message}
            />
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button type="submit" variant="secondary" className={`px-3 w-100`}>
              {!submitting && <span>Add</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

AddUser.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddUser.defaultProps = {
  width: "60%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.user.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddUser: (payload) => dispatch(performPostUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
