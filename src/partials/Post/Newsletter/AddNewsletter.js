import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
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
import { performGetCategoryList } from "../../../redux/actionCreators/categoryCreators";
import {
  performImagePostNewsletter,
  performPostNewsletter,
  performPostNewsletterFile,
} from "../../../redux/actionCreators/newsletterCrestors";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    NewsletterTitle: yup.string().required(),
    NewsletterLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Newsletter Link must not contain special characters"
      ),
    NewsletterSummary: yup.string().required(),
    NewsletterAuthor: yup.string().required(),
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

const AddNewsletter = ({
  submitting,
  handleAddImageNewsletter,
  handleAddNewsletter,
  handleAddNewsletterFile,
  getList,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await getList();
    if (result.status === 200) {
      setData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  const [selectActiveValue, setSelectActiveValue] = useState(null);
  const statusOptions = data?.map((item) => ({
    value: item.categoryName,
    label: item.categoryName,
  }));
  const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const [Newsletterimage, setNewsletterimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("NewsletterImage", file, file.name);
    const result = await handleAddImageNewsletter(formData);
    if (result.status === 200) {
      setNewsletterimage(result?.data?.imageUrl);
    }
  };
  const [NewsletterFile, setNewsletterFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleNewsletterFileClick = () => {
    fileInputRef.current.click();
  };
  const PostNewsletterFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("NewsletterFile", file, file.name);
    const result = await handleAddNewsletterFile(formData);
    if (result.status === 200) {
      setNewsletterFile(result?.data?.fileUrl);
    }
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.NewsletterTags;
    if (tags && tags.length > 0) {
      data.NewsletterTags = tags;
    } else {
      delete data.NewsletterTags;
    }
    const newData = {
      ...data,
      NewsletterCategory: selectValue,
      NewsletterImage: Newsletterimage,
      NewsletterFile: NewsletterFile,
      NewsletterDescription: content,
      status: selectActiveValue?.value,
    };
    const result = await handleAddNewsletter(newData);
    if (result.status === 200) {
      history.push("/post");
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
          <h6 className="mb-0">Add Newsletter</h6>
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
                id="NewsletterTitle"
                name="NewsletterTitle"
                label={"Newsletter Title"}
                {...register("NewsletterTitle")}
                error={errors.NewsletterTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="NewsletterLink"
                name="NewsletterLink"
                label={"Newsletter Link"}
                {...register("NewsletterLink")}
                error={errors.NewsletterLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">Newsletter Image</div>
                <div className="image-container">
                  {Newsletterimage ? (
                    <img
                      src={BACKEND_URL + Newsletterimage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + Newsletterimage}
                      name={`blogTitle`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="NewsletterImage"
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
                <div className="brandimage mb-2 ">Newsletter Content</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing Newsletter here..."}
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
                id="NewsletterSummary"
                name="NewsletterSummary"
                label={"Newsletter Summary"}
                {...register("NewsletterSummary")}
                error={errors.NewsletterSummary?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="NewsletterAuthor"
                name="NewsletterAuthor"
                label={"Newsletter Author"}
                {...register("NewsletterAuthor")}
                error={errors.NewsletterAuthor?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="NewsletterTags"
                name="NewsletterTags"
                label={"Newsletter Tags"}
                {...register("NewsletterTags")}
                error={errors.NewsletterTags?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaDescription"
                name="Newsletter Meta Description"
                label={"Newsletter Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Newsletter Meta Title"
                label={"Newsletter Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="authorLink"
                name="Newsletter Author link"
                label={"Newsletter Author Link"}
                {...register("authorLink")}
                error={errors.authorLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">Newsletter File</div>
                <div className="image-container">
                  {NewsletterFile ? (
                    <img
                      src={BACKEND_URL + NewsletterFile}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + NewsletterFile}
                      name={`NewsletterFile`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="NewsletterFile"
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => PostNewsletterFile(e)}
                    style={{ display: "none" }}
                  />
                </div>
                <IconButton
                  className={"add-image-icon"}
                  variant="primary"
                  icon={{ type: MdAddAPhoto }}
                  onClick={() => handleNewsletterFileClick()}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Select Newsletter option</div>
              <Select
                isMulti
                options={statusOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Newsletter Category"
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectActiveValue}
                onChange={setSelectActiveValue}
                placeHolder="Select Newsletter Active options"
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

AddNewsletter.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddNewsletter.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.newsletter.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddImageNewsletter: (payload) =>
    dispatch(performImagePostNewsletter(payload)),
  handleAddNewsletterFile: (payload) =>
    dispatch(performPostNewsletterFile(payload)),
  getList: (payload) => dispatch(performGetCategoryList(payload)),
  handleAddNewsletter: (payload) => dispatch(performPostNewsletter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsletter);
