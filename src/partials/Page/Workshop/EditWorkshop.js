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
  performPostImageWorkshop,
  performUpdateWorkshop,
} from "../../../redux/actionCreators/workshopCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    workshopName: yup.string().required(),
    workshopLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "workshop Title must not contain special characters"
      ),
    email: yup.string().required(),
    name: yup.string().required(),
    designation: yup.string().required(),
    alternateEmail: yup.string().required(),
    workshopStartingDate: yup.string().required(),
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

const EditWorkshop = ({
  submitting,
  handleUpdateWorkshop,
  handleUpdateWorkshopImageCourse,
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
      workshopName: userData?.workshopName,
      workshopLink: userData?.workshopLink,
      workshopStartingDate: userData?.workshopStartingDate,
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
      value: "Past Workshop",
      label: "Past Workshop",
    },
    {
      value: "Upcoming Workshop",
      label: "Upcoming Workshop",
    },
  ];
  let defaultOptions = statusOptions?.filter((option) =>
    userData?.workshopType?.includes(option.value)
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
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const [workshopImage, setworkshopImage] = useState(null);
  const [workshopTimeLineImage, setworkshopTimeLineImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const fileInputworkshopImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const handleworkshopImageClick = () => {
    fileInputworkshopImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "workshopImage");
    formData.append("workshopImage", file, file?.name);
    const result = await handleUpdateImageCourse(formData);
    if (result.status === 200) {
      setworkshopImage(result?.data?.imageUrl);
    }
  };
  const PostworkshopImages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "workshopTimeLineImage");
    formData.append("workshopTimeLineImage", file, file?.name);
    const result = await handleUpdateWorkshopImageCourse(formData);
    if (result.status === 200) {
      setworkshopTimeLineImage(result?.data?.imageUrl);
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
      id: userData?.workshopLink,
      workshopType: selectValue?.value
        ? selectValue?.value
        : userData?.workshopType,
      workshopName: data?.workshopName
        ? data?.workshopName
        : userData?.workshopName,
      workshopLink: data?.workshopLink
        ? data?.workshopLink
        : userData?.workshopLink,
      workshopStartingDate: data?.workshopStartingDate
        ? data?.workshopStartingDate
        : userData?.workshopStartingDate,
      contactInformation: contactInformation,
      workshopImage: workshopImage ? workshopImage : userData?.workshopImage,
      workshopTimeLineImage: workshopTimeLineImage
        ? workshopTimeLineImage
        : userData?.workshopTimeLineImage,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      authorLink: data?.authorLink ? data?.authorLink : userData?.authorLink,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      status: selectActiveValue ? selectActiveValue?.value : userData?.status,
    };
    const result = await handleUpdateWorkshop(newData);
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
          <h6 className="mb-0">Update Workshop</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="workshopName"
              name="workshopName"
              label={"workshop Name"}
              {...register("workshopName")}
              error={errors.workshopName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="workshopLink"
              name="workshopLink"
              label={"workshop Link"}
              {...register("workshopLink")}
              error={errors.workshopLink?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage mb-2">Select Workshop Type</div>
            <Select
              options={statusOptions}
              value={selectValue}
              onChange={setSelectValue}
              placeHolder="Select Workshop Category"
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Workshop Image</div>
              <div className="image-container">
                {workshopImage ? (
                  <img src={BACKEND_URL + workshopImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.workshopImage}
                    name={userData?.workshopName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="workshopImage"
                  type="file"
                  name="workshopImage"
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
              <div className="brandimage mb-2">Workshop Timeline Image</div>
              <div className="image-container">
                {workshopTimeLineImage ? (
                  <img
                    src={BACKEND_URL + workshopTimeLineImage}
                    alt="uploaded-item"
                  />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.workshopTimeLineImage}
                    name={userData?.workshopName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="workshopTimeLineImage"
                  type="file"
                  name="workshopTimeLineImage"
                  ref={fileInputworkshopImageRef}
                  onChange={(e) => PostworkshopImages(e)}
                  style={{ display: "none" }}
                />
              </div>
              <IconButton
                className={"add-image-icon"}
                variant="primary"
                icon={{ type: MdAddAPhoto }}
                onClick={() => handleworkshopImageClick()}
              />
            </div>
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="workshopStartingDate"
              name="workshopStartingDate"
              label={"workshop Timeline Data"}
              {...register("workshopStartingDate")}
              error={errors.workshopStartingDate?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="brandimage">
              Workshop Contact Information Details
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
            <Input
              type="text"
              id="metaDescription"
              name="Meta Description"
              label={"Workshop Meta Description"}
              {...register("metaDescription")}
              error={errors.metaDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="metaTitle"
              name="Meta Title"
              label={"Workshop Meta Title"}
              {...register("metaTitle")}
              error={errors.metaTitle?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="authorLink"
              name="Workshop Author link"
              label={"Workshop Author Link"}
              {...register("authorLink")}
              error={errors.authorLink?.message}
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

EditWorkshop.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditWorkshop.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateWorkshop: (payload) => dispatch(performUpdateWorkshop(payload)),
  handleUpdateImageCourse: (payload) =>
    dispatch(performPostImageWorkshop(payload, "workshopImage")),
  handleUpdateworkshopImageCourse: (payload) =>
    dispatch(performPostImageWorkshop(payload, "workshopTimeLineImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkshop);
