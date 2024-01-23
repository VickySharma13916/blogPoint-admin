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
  performImagePostWebinarConference,
  performUpdateWebinarConference,
} from "../../../redux/actionCreators/webinarConferenceCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    webinarConferenceTitle: yup.string().required(),
    webinarConferenceLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Webinar Conference Link must not contain special characters"
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

const EditWebinarConference = ({
  submitting,
  handleUpdateWebinarConferenceImage,
  handleUpdateWebinarConference,
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
      webinarConferenceLink: userData?.webinarConferenceLink,
      webinarConferenceDescription: userData?.webinarConferenceDescription,
      webinarConferenceImage: userData?.webinarConferenceImage,
      webinarConferenceTitle: userData?.webinarConferenceTitle,
      status: userData?.status,
      metaTitle: userData?.metaTitle,
      metaDescription: userData?.metaDescription,
      webinarConferenceTags: userData?.webinarConferenceTags,
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
  const [content, setContent] = useState(
    userData?.webinarConferenceDescription
  );
  const [contentmssg, setContentMssg] = useState(false);
  const [webinarConferenceImage, setwebinarConferenceImage] = useState(null);
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
    formData.append("webinarConferenceImage", file, file.name);
    const result = await handleUpdateWebinarConferenceImage(formData);
    if (result.status === 200) {
      setwebinarConferenceImage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.webinarConferenceTags;
    if (tags && tags.length > 0) {
      data.webinarConferenceTags = tags;
    } else {
      delete data.webinarConferenceTags;
    }
    const newData = {
      ...data,
      id: userData?.webinarConferenceLink,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      webinarConferenceImage: webinarConferenceImage
        ? webinarConferenceImage
        : userData?.webinarConferenceImage,
      webinarConferenceDescription: content
        ? content
        : userData?.webinarConferenceDescription,
      status: selectValue ? selectValue?.value : userData?.status,
    };
    const result = await handleUpdateWebinarConference(newData);
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
          <h6 className="mb-0">Update Webinar Conference</h6>
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
                id="webinarConferenceTitle"
                name="webinarConferenceTitle"
                label={"Webinar Conference Title"}
                {...register("webinarConferenceTitle")}
                error={errors.webinarConferenceTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="webinarConferenceLink"
                name="webinarConferenceLink"
                label={"Webinar Conference Link"}
                {...register("webinarConferenceLink")}
                error={errors.webinarConferenceLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">Webinar Conference Image</div>
                <div className="image-container">
                  {webinarConferenceImage ? (
                    <img
                      src={BACKEND_URL + webinarConferenceImage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + userData?.webinarConferenceImage}
                      name={userData?.webinarConferenceTitle}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="webinarConferenceImage"
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
                <div className="brandimage mb-2">
                  Webinar Conference Content
                </div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                defaultValue={userData?.webinarConferenceDescription}
                setContent={setContent}
                placeholder={"Start Typing Webinar Conference here..."}
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
                name="Webinar Conference metaDescription"
                label={"Webinar Conference Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Webinar Conference Meta Title"
                label={"Webinar Conference Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="webinarConferenceTags"
                name="webinarConferenceTags"
                label={"Webinar Conference Tags"}
                {...register("webinarConferenceTags")}
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Webinar Conference options"
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

EditWebinarConference.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditWebinarConference.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.webinarConference.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateWebinarConferenceImage: (payload) =>
    dispatch(performImagePostWebinarConference(payload)),
  handleUpdateWebinarConference: (payload) =>
    dispatch(performUpdateWebinarConference(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWebinarConference);