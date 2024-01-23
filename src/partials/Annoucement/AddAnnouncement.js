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
import DisplayText from "../../components/DisplayText";
import { default as Select } from "../../components/Form/Select";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import Editor from "../../components/TextEditor";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performImagePostAnnouncement,
  performPostAnnouncement,
} from "../../redux/actionCreators/announcementCreators";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    announcementTitle: yup.string().required(),
    announcementLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Announcement Link must not contain special characters"
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

const AddAnnouncement = ({
  submitting,
  handleAddAnnouncement,
  handleAddImageAnnouncement,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
  const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const [announcementImage, setAnnouncementImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("announcementImage", file, file.name);
    const result = await handleAddImageAnnouncement(formData);
    if (result.status === 200) {
      setAnnouncementImage(result?.data?.imageUrl);
    }
  };
  const handlePreview = () => {
    setPreview(!preview);
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.announcementTags;
    if (tags && tags.length > 0) {
      data.announcementTags = tags;
    } else {
      delete data.announcementTags;
    }
    const newData = {
      ...data,
      announcementImage: announcementImage,
      announcementDescription: content,
      status: selectValue?.value,
    };
    const result = await handleAddAnnouncement(newData);
    if (result.status === 200) {
      history.push("/announcement");
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
          <h6 className="mb-0">Add Announcement and News</h6>
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
                id="announcementTitle"
                name="announcementTitle"
                label={"Announcement Title"}
                {...register("announcementTitle")}
                error={errors.announcementTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="announcementLink"
                name="announcementLink"
                label={"Announcement Link"}
                {...register("announcementLink")}
                error={errors.announcementLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">Announcement Image</div>
                <div className="image-container">
                  {announcementImage ? (
                    <img
                      src={BACKEND_URL + announcementImage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + announcementImage}
                      name="Announcement Image"
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="announcementImage"
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
                  Announcement and News Content
                </div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing Announcement and News here..."}
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
                id="announcementTags"
                name="announcementTags"
                label={"Announcement Tags"}
                {...register("announcementTags")}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaDescription"
                name="Announcement metaDescription"
                label={"Announcement Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Announcement Meta Title"
                label={"Announcement Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Announcement options"
              />
            </Col>
            <Col xs={8} className="mt-4 mb-2 mx-auto">
              <Button
                type="submit"
                variant="secondary"
                className={`px-3 w-100`}
              >
                {!submitting && <span>Add</span>}
                {submitting && <Spinner animation="border" />}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Portal>
  );
};

AddAnnouncement.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddAnnouncement.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.announcement.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddImageAnnouncement: (payload) =>
    dispatch(performImagePostAnnouncement(payload)),
  handleAddAnnouncement: (payload) =>
    dispatch(performPostAnnouncement(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAnnouncement);
