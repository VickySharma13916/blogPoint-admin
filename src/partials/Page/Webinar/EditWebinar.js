import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import IconButton from "../../../components/IconButton";
import Portal from "../../../components/Portal";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performPostImageWebinar,
  performUpdateWebinar,
} from "../../../redux/actionCreators/webinarCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    webinarName: yup.string().required(),
    webinarLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Webinar Link must not contain special characters"
      ),
    email: yup.string().required(),
    name: yup.string().required(),
    designation: yup.string().required(),
    alternateEmail: yup.string().required(),
    webinarStartingDate: yup.string().required(),
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

const EditWebinar = ({
  submitting,
  handleUpdateWebinar,
  handleUpdateWebinarImageCourse,
  handleUpdateImageCourse,
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
      webinarLink: userData?.webinarLink,
      webinarName: userData?.webinarName,
      webinarStartingDate: userData?.webinarStartingDate,
      WebinarYoutubeLink: userData?.WebinarYoutubeLink,
      authorLink: userData?.authorLink,
      metaTitle: userData?.metaTitle,
      metaDescription: userData?.metaDescription,
      email: email,
      name: name,
      designation: designation,
      phoneNumber: phoneNumber,
      alternateEmail: alternateEmail,
      status: userData?.status,
    },
  });
  const statusOptions = [
    {
      value: "Past Webinar",
      label: "Past Webinar",
    },
    {
      value: "Upcoming Webinar",
      label: "Upcoming Webinar",
    },
  ];
  let defaultOptions = statusOptions?.filter((option) =>
    userData?.WebinarType?.includes(option.value)
  );
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
  const [selectValue, setSelectValue] = useState(defaultOptions);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const [webinarImage, setWebinarImage] = useState(null);
  const [webinarTimeLineImage, setWebinarTimeLineImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const fileInputwebinarImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const handlewebinarImageClick = () => {
    fileInputwebinarImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "webinarImage");
    formData.append("webinarImage", file, file?.name);
    const result = await handleUpdateImageCourse(formData);
    if (result.status === 200) {
      setWebinarImage(result?.data?.imageUrl);
    }
  };
  const PostwebinarImages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "webinarTimeLineImage");
    formData.append("webinarTimeLineImage", file, file?.name);
    const result = await handleUpdateWebinarImageCourse(formData);
    if (result.status === 200) {
      setWebinarTimeLineImage(result?.data?.imageUrl);
    }
  };
  const isMobile = useWindowSize();

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
      id: userData?.webinarLink,
      authorLink: data?.authorLink ? data?.authorLink : userData?.authorLink,
      webinarLink: data?.webinarLink
        ? data?.webinarLink
        : userData?.webinarLink,
      WebinarType: selectValue?.value
        ? selectValue?.value
        : userData?.WebinarType,
      WebinarYoutubeLink: data?.WebinarYoutubeLink
        ? data?.WebinarYoutubeLink
        : userData?.WebinarYoutubeLink,
      webinarName: data?.webinarName
        ? data?.webinarName
        : userData?.webinarName,
      webinarStartingDate: data?.webinarStartingDate
        ? data?.webinarStartingDate
        : userData?.webinarStartingDate,
      contactInformation: contactInformation,
      webinarImage: webinarImage ? webinarImage : userData?.webinarImage,
      webinarTimeLineImage: webinarTimeLineImage
        ? webinarTimeLineImage
        : userData?.webinarTimeLineImage,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      status: selectActiveValue ? selectActiveValue?.value : userData?.status,
    };
    const result = await handleUpdateWebinar(newData);
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
          <h6 className="mb-0">Update Webinar</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="webinarName"
              name="webinarName"
              label={"Webinar Name"}
              {...register("webinarName")}
              error={errors.webinarName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="webinarLink"
              name="webinarLink"
              label={"Webinar Link"}
              {...register("webinarLink")}
              error={errors.webinarLink?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage mb-2">Select Webinar Type</div>
            <Select
              options={statusOptions}
              value={selectValue}
              onChange={setSelectValue}
              placeHolder="Select Webinar Category"
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Webinar Image</div>
              <div className="image-container">
                {webinarImage ? (
                  <img src={BACKEND_URL + webinarImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.webinarImage}
                    name={userData?.webinarName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="webinarImage"
                  type="file"
                  name="webinarImage"
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
              <div className="brandimage mb-2">Webinar Timeline Image</div>
              <div className="image-container">
                {webinarTimeLineImage ? (
                  <img
                    src={BACKEND_URL + webinarTimeLineImage}
                    alt="uploaded-item"
                  />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.webinarTimeLineImage}
                    name={userData?.webinarName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="webinarTimeLineImage"
                  type="file"
                  name="webinarTimeLineImage"
                  ref={fileInputwebinarImageRef}
                  onChange={(e) => PostwebinarImages(e)}
                  style={{ display: "none" }}
                />
              </div>
              <IconButton
                className={"add-image-icon"}
                variant="primary"
                icon={{ type: MdAddAPhoto }}
                onClick={() => handlewebinarImageClick()}
              />
            </div>
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="webinarStartingDate"
              name="webinarStartingDate"
              label={"Webinar Timeline Data"}
              {...register("webinarStartingDate")}
              error={errors.webinarStartingDate?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="WebinarYoutubeLink"
              name="WebinarYoutubeLink"
              label={"Webinar Youtube Link"}
              {...register("WebinarYoutubeLink")}
              error={errors.WebinarYoutubeLink?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage">
              Webinar Contact Information Details
            </div>
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="name"
              name="name"
              label={"Name"}
              {...register("name")}
              error={errors.name?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
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
              type="text"
              id="metaDescription"
              name="Meta Description"
              label={"Webinar Meta Description"}
              {...register("metaDescription")}
              error={errors.metaDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="metaTitle"
              name="Meta Title"
              label={"Webinar Meta Title"}
              {...register("metaTitle")}
              error={errors.metaTitle?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="authorLink"
              name="Webinar Author link"
              label={"Webinar Author Link"}
              {...register("authorLink")}
              error={errors.authorLink?.message}
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
              placeHolder="Select Webinar Active options"
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

EditWebinar.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditWebinar.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.homepage.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateWebinar: (payload) => dispatch(performUpdateWebinar(payload)),
  handleUpdateImageCourse: (payload) =>
    dispatch(performPostImageWebinar(payload, "webinarImage")),
  handleUpdateWebinarImageCourse: (payload) =>
    dispatch(performPostImageWebinar(payload, "webinarTimeLineImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWebinar);
