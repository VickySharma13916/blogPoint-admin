import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import * as yup from "yup";
import DisplayText from "../../../components/DisplayText";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import IconButton from "../../../components/IconButton";
import Portal from "../../../components/Portal";
import Editor from "../../../components/TextEditor";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performImagePostEventConference,
  performUpdateEventConference,
} from "../../../redux/actionCreators/eventConferenceCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    eventConferenceTitle: yup.string().required(),
    eventConferenceLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Event Conference Link must not contain special characters"
      ),
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

const EditEventConference = ({
  submitting,
  handleAddImageEventConference,
  handleAddEventConference,
  history,
}) => {
  const userData = history.location.state?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      eventConferenceLink: userData?.eventConferenceLink,
      eventConferenceDescription: userData?.eventConferenceDescription,
      eventConferenceImage: userData?.eventConferenceImage,
      eventConferenceTitle: userData?.eventConferenceTitle,
      status: userData?.status,
      metaTitle: userData?.metaTitle,
      metaDescription: userData?.metaDescription,
      eventConferenceTags: userData?.eventConferenceTags,
    },
  });
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
  const statusOptions = ActiveData?.map((item) => ({
    value: item.value,
    label: item.label,
  }));
  const defaultStatusOption = statusOptions.find(
    (option) => option.value === userData?.status
  );
  const [selectValue, setSelectValue] = useState(
    defaultStatusOption ? [defaultStatusOption] : []
  );
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState(userData?.eventConferenceDescription);
  const [contentmssg, setContentMssg] = useState(false);
  const [eventConferenceImage, seteventConferenceImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("eventConferenceImage", file, file.name);
    const result = await handleAddImageEventConference(formData);
    if (result.status === 200) {
      seteventConferenceImage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.eventConferenceTags;
    if (tags && tags.length > 0) {
      data.eventConferenceTags = tags;
    } else {
      delete data.eventConferenceTags;
    }
    const newData = {
      ...data,
      id: userData?.eventConferenceLink,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      eventConferenceImage: eventConferenceImage
        ? eventConferenceImage
        : userData?.eventConferenceImage,
      eventConferenceDescription: content
        ? content
        : userData?.eventConferenceDescription,
      status: selectValue ? selectValue?.value : userData?.status,
    };
    const result = await handleAddEventConference(newData);
    if (result.status === 200) {
      history.push("/event");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "75%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Update Event Conference</h6>
        </>
      }
    >
      {preview ? (
        <DisplayText
          htmlContent={content}
          preview={preview}
          handlePreview={handlePreview}
        />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col xs={12}>
              <Input
                type="text"
                id="eventConferenceTitle"
                name="eventConferenceTitle"
                label={"Event Conference Title"}
                {...register("eventConferenceTitle")}
                error={errors.eventConferenceTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="eventConferenceLink"
                name="eventConferenceLink"
                label={"Event Conference Link"}
                {...register("eventConferenceLink")}
                error={errors.eventConferenceLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">Event Conference Image</div>
                <div className="image-container">
                  {eventConferenceImage ? (
                    <img
                      src={BACKEND_URL + eventConferenceImage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + userData?.eventConferenceImage}
                      name={userData?.eventConferenceTitle}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="eventConferenceImage"
                    type="file"
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
              <div className="d-flex justify-content-between mb-2">
                <div className="brandimage mb-2">Event Conference Content</div>
                {content?.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                defaultValue={userData?.eventConferenceDescription}
                setContent={setContent}
                placeholder={"Start Typing Event Conference here..."}
              />
              {contentmssg && (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  Text Content is Required
                </p>
              )}
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaDescription"
                name="Event Conference metaDescription"
                label={"Event Conference Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Meta Title"
                label={"Event Conference Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="eventConferenceTags"
                name="eventConferenceTags"
                label={"Event Conference Tags"}
                {...register("eventConferenceTags")}
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Event Conference options"
              />
            </Col>
            <Col xs={8} className="mt-4 mb-2 mx-auto">
              <Button
                type="submit"
                variant="secondary"
                className={`px-3 w-100`}
              >
                {!submitting && <span>Update</span>}
                {submitting && <Spinner animation="border" />}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Portal>
  );
};

EditEventConference.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditEventConference.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.eventConference.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddImageEventConference: (payload) =>
    dispatch(performImagePostEventConference(payload)),
  handleAddEventConference: (payload) =>
    dispatch(performUpdateEventConference(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventConference);
