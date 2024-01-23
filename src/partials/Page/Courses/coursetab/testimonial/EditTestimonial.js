import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import {
  performPostImageCourse,
  performUpdateAccordionCourse,
} from "../../../../../redux/actionCreators/courseCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const schema = yup
  .object({
    studentName: yup.string().required(),
    studentDescription: yup.string().required(),
  })
  .required();

const EditTestimonial = ({
  submitting,
  handleAddImageCourse,
  handleEditTestimonial,
  history,
}) => {
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
      studentName: userData?.studentName,
      studentDescription: userData?.studentDescription,
    },
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const [studentImage, setStudentImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "studentImage");
    formData.append("studentImage", file, file.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setStudentImage(result?.data?.imageUrl);
    }
  };
  const isMobile = useWindowSize();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type: "testimonial",
      courseId: firstID,
      accordionId: id,
      studentImage: studentImage ? studentImage : userData?.studentImage,
    };
    const result = await handleEditTestimonial(newData);
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
          <h6 className="mb-0">Update Testimonial</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="studentName"
              name="studentName"
              label={"course Testimonial Name"}
              {...register("studentName")}
              error={errors.studentName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="studentDescription"
              name="studentDescription"
              label={"course Testimonial Description"}
              {...register("studentDescription")}
              error={errors.studentDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Testimonial Image</div>
              <div className="image-container">
                {studentImage ? (
                  <img src={BACKEND_URL + studentImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.studentImage}
                    name={userData?.studentName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="studentImage"
                  type="file"
                  name="studentImage"
                  ref={fileInputImageRef}
                  onChange={(e) => Postbrandlogoimages(e)}
                  style={{ display: "none" }}
                />
              </div>
              <IconButton
                className={"add-image-icon"}
                variant="primary"
                icon={{ type: MdAddAPhoto }}
                onClick={() => handleBrandImageClick()}
              />
            </div>
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

EditTestimonial.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditTestimonial.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditTestimonial: (payload) =>
    dispatch(performUpdateAccordionCourse(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performPostImageCourse(payload, "studentImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTestimonial);
