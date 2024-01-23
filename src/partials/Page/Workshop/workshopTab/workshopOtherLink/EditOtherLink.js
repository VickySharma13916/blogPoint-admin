import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import { performUpdateWorkshopDetail } from "../../../../../redux/actionCreators/workshopCreators";

const schema = yup
  .object({
    workshopOtherName: yup.string().required(),
  })
  .required();

const EditOtherLink = ({ submitting, handleEditOtherLink, history }) => {
  const userData = history.location.state?.data;
  const courseId = history?.location?.pathname;
  const pathSegments = courseId.split("/");
  const firstID = pathSegments[3];
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      workshopOtherName: userData?.workshopOtherName,
      workshopOtherLink: userData?.workshopOtherLink,
    },
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      courseId: firstID,
      accordionId: id,
      type: "links",
    };
    const result = await handleEditOtherLink(newData);
    if (result.status === 200) {
      history.push("/page");
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
          <h6 className="mb-0">Update Other Links</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="workshopOtherName"
              name="workshopOtherName"
              label={"Webinar Other Name"}
              {...register("workshopOtherName")}
              error={errors.workshopOtherName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="workshopOtherLink"
              name="workshopOtherLink"
              label={"Webinar Other Link"}
              {...register("workshopOtherLink")}
              error={errors.workshopOtherLink?.message}
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

EditOtherLink.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditOtherLink.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditOtherLink: (payload) =>
    dispatch(performUpdateWorkshopDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOtherLink);
