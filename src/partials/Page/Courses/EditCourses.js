import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../../components/Form/Input";
import IconButton from "../../../components/IconButton";
import Portal from "../../../components/Portal";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performPostImageCourse,
  performUpdateCourse,
} from "../../../redux/actionCreators/courseCreators";
import { useRef } from "react";
import Avatar from "react-avatar";
import { MdAddAPhoto } from "react-icons/md";
import { BACKEND_URL } from "../../../services/constants";
import Select from "../../../components/Form/Select";

const schema = yup
  .object({
    courseName: yup.string().required(),
    coursesLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Courses link must not contain special characters"
      ),
    email: yup.string().required(),
    name: yup.string().required(),
    designation: yup.string().required(),
    phoneNumber: yup.string().required(),
    alternateEmail: yup.string().required(),
    courseStartingDate: yup.string().required(),

    metaTitle: yup
      .string()
      .required()
      .max(60, "Meta Title must be at most 60 characters"),
    metaDescription: yup
      .string()
      .required()
      .max(160, "Meta Description must be at most 160 characters"),
  })
  .required();

const EditCourses = ({
  updating,
  handleAddCourseImageCourse,
  handleAddImageCourse,
  updateCourse,
  history,
}) => {
  const userData = history.location.state?.data;
  const { email, name, alternateEmail, designation, phoneNumber } =
    userData?.contactInformation;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      courseName: userData?.courseName,
      coursesLink: userData?.coursesLink,
      email: email,
      name: name,
      designation: designation,
      phoneNumber: phoneNumber,
      alternateEmail: alternateEmail,
      authorLink: userData?.authorLink,
      metaTitle: userData?.metaTitle,
      metaDescription: userData?.metaDescription,
      status: userData?.status,
      courseStartingDate: userData?.courseStartingDate,
    },
  });
  const statusOptions = [
    {
      value: "Past Courses",
      label: "Past Courses",
    },
    {
      value: "Upcoming Courses",
      label: "Upcoming Courses",
    },
  ];
  let defaultOptions = statusOptions?.filter((option) =>
    userData?.coursesType?.includes(option.value)
  );

  const [selectValue, setSelectValue] = useState(defaultOptions);
  const ActiveData = [
    {
      value: true,
      label: "Published",
    },
    {
      value: false,
      label: "Draft",
    },
  ];
  const statusActiveOptions = ActiveData?.map((item) => ({
    value: item.value,
    label: item.label,
  }));
  const defaultStatusOption = statusActiveOptions.find(
    (option) => option.value === userData?.status
  );
  const [selectActiveValue, setSelectActiveValue] = useState(
    defaultStatusOption ? [defaultStatusOption] : []
  );
  const [openState, setOpenState] = useState(true);
  const isMobile = useWindowSize();
  const [Courseimage, setCourseimage] = useState(null);
  const [CourseTimelineimage, setCourseTimelineimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const fileInputCourseImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const handleCourseImageClick = () => {
    fileInputCourseImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("courseImage", file, file?.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setCourseimage(result?.data?.imageUrl);
    }
  };
  const PostCourseImages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("courseTimeLineImage", file, file?.name);
    const result = await handleAddCourseImageCourse(formData);
    if (result.status === 200) {
      setCourseTimelineimage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    const contactInformation = {
      name: data?.name ? data?.name : userData?.contactInformation?.name,
      email: data?.email ? data?.email : userData?.contactInformation?.email,
      alternateEmail: data?.alternateEmail
        ? data?.alternateEmail
        : userData?.contactInformation?.alternateEmail,
      phoneNumber: data?.phoneNumber
        ? data?.phoneNumber
        : userData?.contactInformation?.phoneNumber,
      designation: data?.designation
        ? data?.designation
        : userData?.contactInformation?.designation,
    };
    const newData = {
      coursesType: selectValue?.value
        ? selectValue?.value
        : userData?.coursesType,
      courseName: data?.courseName ? data?.courseName : userData?.courseName,
      coursesLink: data?.coursesLink
        ? data?.coursesLink
        : userData?.coursesLink,
      authorLink: data?.authorLink ? data?.authorLink : userData?.authorLink,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      courseStartingDate: data?.courseStartingDate
        ? data?.courseStartingDate
        : userData?.courseStartingDate,
      contactInformation: contactInformation,
      courseImage: Courseimage ? Courseimage : userData?.courseImage,
      courseTimeLineImage: CourseTimelineimage
        ? CourseTimelineimage
        : userData?.courseTimeLineImage,
      id: userData?.coursesLink,
      status: selectActiveValue ? selectActiveValue?.value : userData?.status,
    };
    const result = await updateCourse(newData);
    if (result.status === 200) {
      history.goBack();
    }
  };

  const handleOnClose = () => {
    setOpenState(false);
  };
  return (
    <Portal
      open={openState}
      width={isMobile ? "100%" : "60%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Update Course</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="courseName"
              name="courseName"
              label="course Name"
              {...register("courseName")}
              error={errors.courseName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="coursesLink"
              name="coursesLink"
              label="course Link"
              {...register("coursesLink")}
              error={errors.coursesLink?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Course Image</div>
              <div className="image-container">
                {Courseimage ? (
                  <img src={BACKEND_URL + Courseimage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.courseImage}
                    name={userData?.courseName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="courseImage"
                  type="file"
                  name="courseImage"
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
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Course Timeline Image</div>
              <div className="image-container">
                {CourseTimelineimage ? (
                  <img
                    src={BACKEND_URL + CourseTimelineimage}
                    alt="uploaded-item"
                  />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.courseTimeLineImage}
                    name={userData?.courseName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="courseTimeLineImage"
                  type="file"
                  name="courseTimeLineImage"
                  ref={fileInputCourseImageRef}
                  onChange={(e) => PostCourseImages(e)}
                  style={{ display: "none" }}
                />
              </div>
              <IconButton
                className={"add-image-icon"}
                variant="primary"
                icon={{ type: MdAddAPhoto }}
                onClick={() => handleCourseImageClick()}
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="brandimage mb-2">Select Courses Type</div>
            <Select
              options={statusOptions}
              value={selectValue}
              onChange={setSelectValue}
              placeHolder="Select Courses Category"
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="courseStartingDate"
              name="courseStartingDate"
              label={"course Timeline Data"}
              {...register("courseStartingDate")}
              error={errors.courseStartingDate?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage">Contact Information Details</div>
          </Col>
          <Col xs={12}>
            <Input
              id="name"
              name="name"
              label="Name"
              {...register("name")}
              error={errors.name?.message}
            />
          </Col>

          <Col xs={12}>
            <Input
              id="metaDescription"
              name="metaDescription"
              label="Course Meta Description"
              {...register("metaDescription")}
              error={errors.metaDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="metaTitle"
              name="metaTitle"
              label="Course Meta Title"
              {...register("metaTitle")}
              error={errors.metaTitle?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="authorLink"
              name="authorLink"
              label="Course Author Link"
              {...register("authorLink")}
              error={errors.authorLink?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              label="phoneNumber"
              {...register("phoneNumber")}
              error={errors.phoneNumber?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="email"
              name="email"
              label="Email Address"
              {...register("email")}
              error={errors.email?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="alternateEmail"
              name="alternateEmail"
              label="Alternate Email Address"
              {...register("alternateEmail")}
              error={errors.alternateEmail?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="designation"
              name="designation"
              label="Designation"
              {...register("designation")}
              error={errors.designation?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage mb-2">Published option</div>
            <Select
              options={ActiveData}
              value={selectActiveValue}
              onChange={setSelectActiveValue}
              placeHolder="Select Course Active options"
            />
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button
              type="submit"
              variant="secondary"
              className={`px-3 mx-auto w-100 w-md-75`}
            >
              {!updating && <span>Update</span>}
              {updating && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

EditCourses.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditCourses.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  updating: state.course.updating,
});

const mapDispatchToProps = (dispatch) => ({
  updateCourse: (payload) => dispatch(performUpdateCourse(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performPostImageCourse(payload, "courseImage")),
  handleAddCourseImageCourse: (payload) =>
    dispatch(performPostImageCourse(payload, "courseTimeLineImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourses);
