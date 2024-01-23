import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import { performUpdateCategory } from "../../redux/actionCreators/categoryCreators";

const schema = yup
  .object({
    categoryName: yup.string().required(),
  })
  .required();

const EditCategory = ({ submitting, handleUpdateCategory, history }) => {
  const userData = history.location.state?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categoryName: userData?.categoryName,
    },
  });

  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      id: userData?._id,
    };
    const result = await handleUpdateCategory(newData);
    if (result.status === 200) {
      history.push("/category");
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
          <h6 className="mb-0">Update Category</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="categoryName"
              name="categoryName"
              label={"Category Name"}
              {...register("categoryName")}
              error={errors.categoryName?.message}
            />
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button type="submit" variant="secondary" className={`px-3 w-100`}>
              {!submitting && <span>Update</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

EditCategory.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditCategory.defaultProps = {
  width: "60%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.category.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCategory: (payload) => dispatch(performUpdateCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
