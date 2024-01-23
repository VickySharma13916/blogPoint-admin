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
import { performPostAccordionCourse } from "../../../../../redux/actionCreators/courseCreators";

const schema = yup
  .object({
    CourseOtherName: yup.string().required(),
  })
  .required();

const AddOtherLink = ({ submitting, handleAddOtherLink, history }) => {
  const { id } = useParams();
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
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type: "links",
      courseId: id,
    };
    const result = await handleAddOtherLink(newData);
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
          <h6 className="mb-0">Add Other Link</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="CourseOtherName"
              name="CourseOtherName"
              label={"course Other Name"}
              {...register("CourseOtherName")}
              error={errors.CourseOtherName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="CourseOtherLink"
              name="CourseOtherLink"
              label={"course Other Link"}
              {...register("CourseOtherLink")}
              error={errors.CourseOtherLink?.message}
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

AddOtherLink.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddOtherLink.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddOtherLink: (payload) =>
    dispatch(performPostAccordionCourse(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOtherLink);
