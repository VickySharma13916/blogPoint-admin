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
import { default as Select } from "../../../components/Form/Select";
import IconButton from "../../../components/IconButton";
import Portal from "../../../components/Portal";
import Editor from "../../../components/TextEditor";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performImagePostBlog,
  performPostBlog,
} from "../../../redux/actionCreators/blogCreators";
import { performGetCategoryList } from "../../../redux/actionCreators/categoryCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    blogTitle: yup.string().required(),
    blogLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Blog Link must not contain special characters"
      ),
    blogSummary: yup.string().required(),
    blogAuthor: yup.string().required(),
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
const AddBlog = ({
  submitting,
  handleAddImageBlog,
  handleAddBlog,
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
  const statusOptions = data?.map((item) => ({
    value: item.categoryName,
    label: item.categoryName,
  }));
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
  const [preview, setPreview] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const [blogimage, setBlogimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("blogImage", file, file.name);
    const result = await handleAddImageBlog(formData);
    if (result.status === 200) {
      setBlogimage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.blogTags;
    if (tags && tags.length > 0) {
      data.blogTags = tags;
    } else {
      delete data.blogTags;
    }
    const newData = {
      ...data,
      blogCategory: selectValue,
      blogImage: blogimage,
      blogDescription: content,
      status: selectActiveValue?.value,
    };
    const result = await handleAddBlog(newData);
    if (result.status === 200) {
      history.push("/post");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  const handlePreview = () => {
    setPreview(!preview);
  };
  return (
    <>
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
            <h6 className="mb-0">Add Blogs</h6>
          </>
        }
      >
        {preview ? (
          <DisplayText
            preview={preview}
            htmlContent={content}
            handlePreview={handlePreview}
          />
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={12}>
                <Input
                  type="text"
                  id="blogTitle"
                  name="blogTitle"
                  label={"Blog Title"}
                  {...register("blogTitle")}
                  error={errors.blogTitle?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="blogLink"
                  name="blogLink"
                  label={"Blog Link"}
                  {...register("blogLink")}
                  error={errors.blogLink?.message}
                />
              </Col>
              <Col xs={12}>
                <div className="image-uploader-container">
                  <div className="brandimage mb-2">Blog Image</div>
                  <div className="image-container">
                    {blogimage ? (
                      <img src={BACKEND_URL + blogimage} alt="uploaded-item" />
                    ) : (
                      <Avatar
                        src={BACKEND_URL + blogimage}
                        name={`blogTitle`}
                        size="100"
                        className="ff-primary rounded-circle me-3"
                      />
                    )}
                    <input
                      id="blogImage"
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
                  <div className="brandimage mb-2">Blog Content</div>
                  {content && (
                    <Button variant="primary" onClick={() => handlePreview()}>
                      <IoMdEye size={20} />
                    </Button>
                  )}
                </div>
                <Editor
                  content={content}
                  setContent={setContent}
                  placeholder={"Start Typing Blog here..."}
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
                  id="blogSummary"
                  name="blogSummary"
                  label={"Blog Summary"}
                  {...register("blogSummary")}
                  error={errors.blogSummary?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="blogTags"
                  name="blogTags"
                  label={"Blog Tags"}
                  {...register("blogTags")}
                  error={errors.blogTags?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="blogAuthor"
                  name="blogAuthor"
                  label={"Blog Author"}
                  {...register("blogAuthor")}
                  error={errors.blogAuthor?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="metaDescription"
                  name="Meta Description"
                  label={"Blog Meta Description"}
                  {...register("metaDescription")}
                  error={errors.metaDescription?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="metaTitle"
                  name="Meta Title"
                  label={"Blog Meta Title"}
                  {...register("metaTitle")}
                  error={errors.metaTitle?.message}
                />
              </Col>
              <Col xs={12}>
                <Input
                  type="text"
                  id="authorLink"
                  name="Blog Author link"
                  label={"Blog Author Link"}
                  {...register("authorLink")}
                  error={errors.authorLink?.message}
                />
              </Col>
              <Col xs={12}>
                <div className="brandimage mb-2">Select Blog option</div>
                <Select
                  isMulti
                  options={statusOptions}
                  value={selectValue}
                  onChange={setSelectValue}
                  placeHolder="Select Blog Category"
                />
              </Col>
              <Col xs={12}>
                <div className="brandimage mb-2">Published option</div>
                <Select
                  options={ActiveData}
                  value={selectActiveValue}
                  onChange={setSelectActiveValue}
                  placeHolder="Select Blog Active options"
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
    </>
  );
};

AddBlog.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddBlog.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.blog.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCategoryList(payload)),
  handleAddImageBlog: (payload) => dispatch(performImagePostBlog(payload)),
  handleAddBlog: (payload) => dispatch(performPostBlog(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
