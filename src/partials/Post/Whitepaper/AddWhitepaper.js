import { yupResolver } from "@hookform/resolvers/yup";
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
  performImagePostWhitepaper,
  performPostWhitepaper,
  performPostWhitepaperFile,
} from "../../../redux/actionCreators/whitepaperCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    whitepaperTitle: yup.string().required(),
    whitepaperLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "whitepaper Link must not contain special characters"
      ),
    whitepaperSummary: yup.string().required(),
    whitepaperAuthor: yup.string().required(),
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

const AddWhitePaper = ({
  submitting,
  getList,
  handleAddImage,
  performAddWhitePaper,
  history,
  handleAddWhitepaperFile,
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

  const statusOptions = data?.map((item) => ({
    value: item.categoryName,
    label: item.categoryName,
  }));
  const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
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
  const isMobile = useWindowSize();
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const [whitepaperimage, setwhitepaperimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("whitepaperImage", file, file.name);
    const result = await handleAddImage(formData);
    if (result.status === 200) {
      setwhitepaperimage(result?.data?.imageUrl);
    }
  };
  const [whitepaperFile, setwhitepaperFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleWhitepaperFileClick = () => {
    fileInputRef.current.click();
  };
  const PostWhitePaperFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("whitepaperFile", file, file.name);
    const result = await handleAddWhitepaperFile(formData);
    if (result.status === 200) {
      setwhitepaperFile(result?.data?.fileUrl);
    }
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.whitepaperTags;
    if (tags && tags.length > 0) {
      data.whitepaperTags = tags;
    } else {
      delete data.whitepaperTags;
    }
    const newData = {
      ...data,
      whitepaperCategory: selectValue,
      whitepaperImage: whitepaperimage,
      whitepaperFile: whitepaperFile,
      whitepaperDescription: content,
      status: selectActiveValue?.value,
    };
    const result = await performAddWhitePaper(newData);
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
          <h6 className="mb-0">Add whitepapers</h6>
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
                id="whitepaperTitle"
                name="whitepaperTitle"
                label={"whitepaper Link"}
                {...register("whitepaperTitle")}
                error={errors.whitepaperTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="whitepaperLink"
                name="whitepaperLink"
                label={"whitepaper Title"}
                {...register("whitepaperLink")}
                error={errors.whitepaperLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">whitepaper Image</div>
                <div className="image-container">
                  {whitepaperimage ? (
                    <img
                      src={BACKEND_URL + whitepaperimage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + whitepaperimage}
                      name={`whitepaperTitle`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="whitepaperImage"
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
                <div className="brandimage mb-2 ">whitepaper Content</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing whitepaper here..."}
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
                id="whitepaperSummary"
                name="whitepaperSummary"
                label={"whitepaper Summary"}
                {...register("whitepaperSummary")}
                error={errors.whitepaperSummary?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="whitepaperAuthor"
                name="whitepaperAuthor"
                label={"whitepaper Author"}
                {...register("whitepaperAuthor")}
                error={errors.whitepaperAuthor?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="whitepaperTags"
                name="whitepaperTags"
                label={"whitepaper Tags"}
                {...register("whitepaperTags")}
                error={errors.whitepaperTags?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaDescription"
                name="Meta Description"
                label={"Whitepaper Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Meta Title"
                label={"Whitepaper Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="authorLink"
                name="Whitepaper Author link"
                label={"Whitepaper Author Link"}
                {...register("authorLink")}
                error={errors.authorLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">whitepaper File</div>
                <div className="image-container">
                  {whitepaperFile ? (
                    <img
                      src={BACKEND_URL + whitepaperFile}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + whitepaperFile}
                      name={`whitepaperFile`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="whitepaperFile"
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => PostWhitePaperFile(e)}
                    style={{ display: "none" }}
                  />
                </div>
                <IconButton
                  className={"add-image-icon"}
                  variant="primary"
                  icon={{ type: MdAddAPhoto }}
                  onClick={() => handleWhitepaperFileClick()}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Select Whitepaper option</div>
              <Select
                isMulti
                options={statusOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Whitepaper Category"
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectActiveValue}
                onChange={setSelectActiveValue}
                placeHolder="Select Whitepaper Active options"
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

const mapStateToProps = (state) => ({
  submitting: state.whitepaper.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCategoryList(payload)),
  handleAddImage: (payload) => dispatch(performImagePostWhitepaper(payload)),
  handleAddWhitepaperFile: (payload) =>
    dispatch(performPostWhitepaperFile(payload)),
  performAddWhitePaper: (payload) => dispatch(performPostWhitepaper(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWhitePaper);
