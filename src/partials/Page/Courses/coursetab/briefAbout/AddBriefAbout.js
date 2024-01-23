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
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import DisplayText from "../../../../../components/DisplayText";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import Editor from "../../../../../components/TextEditor";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import {
  performPostAccordionCourse,
  performPostImageCourse,
} from "../../../../../redux/actionCreators/courseCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const schema = yup
  .object({
    AboutTitle: yup.string().required(),
  })
  .required();

const AddBriefAbout = ({
  submitting,
  handleAddBriefAbout,
  handleAddImageCourse,
  history,
}) => {
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
  const [AboutImage, setAboutImage] = useState(null);
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const fileInputImageRef = useRef(null);
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "AboutImage");
    formData.append("AboutImage", file, file.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setAboutImage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const newData = {
      type: "briefabout",
      courseId: id,
      AboutTitle: data.AboutTitle,
      AboutDescription: content,
      AboutImage: AboutImage,
    };
    const result = await handleAddBriefAbout(newData);
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
          <h6 className="mb-0">Add Brief About</h6>
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
                id="AboutTitle"
                name="AboutTitle"
                label={"course About Title"}
                {...register("AboutTitle")}
                error={errors.AboutTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex justify-content-between mb-2">
                <div className="brandimage mb-2 ">About Description</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing Brief About here..."}
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
              <div className="image-uploader-container">
                <div className="brandimage mb-2">About brief Image</div>
                <div className="image-container">
                  {AboutImage ? (
                    <img src={BACKEND_URL + AboutImage} alt="uploaded-item" />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + AboutImage}
                      name={`About Brief Image`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="AboutImage"
                    type="file"
                    name="AboutImage"
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

AddBriefAbout.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddBriefAbout.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddBriefAbout: (payload) =>
    dispatch(performPostAccordionCourse(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performPostImageCourse(payload, "AboutImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBriefAbout);
