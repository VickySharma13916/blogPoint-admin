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
import {
  performImagePostCaseStudies,
  performPostCaseStudiesFile,
  performUpdateCaseStudies,
} from "../../../redux/actionCreators/caseStudiesCreator";
import { performGetCategoryList } from "../../../redux/actionCreators/categoryCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    CaseStudiesTitle: yup.string().required(),
    CaseStudiesLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Case Study Title must not contain special characters"
      ),
    CaseStudiesSummary: yup.string().required(),
    CaseStudiesAuthor: yup.string().required(),
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

const EditCaseStudies = ({
  submitting,
  handleAddImageCaseStudies,
  handleUpdateCaseStudies,
  handleAddCaseStudiesFile,
  getList,
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
      CaseStudiesAuthor: userData?.CaseStudiesAuthor,
      CaseStudiesLink: userData?.CaseStudiesLink,
      CaseStudiesCategory: userData?.CaseStudiesCategory,
      CaseStudiesDescription: userData?.CaseStudiesDescription,
      CaseStudiesImage: userData?.CaseStudiesImage,
      CaseStudiesSummary: userData?.CaseStudiesSummary,
      CaseStudiesFile: userData?.CaseStudiesFile,
      CaseStudiesTitle: userData?.CaseStudiesTitle,
      status: userData?.status,
      authorLink: userData?.authorLink,
      metaTitle: userData?.metaTitle,
      metaDescription: userData?.metaDescription,
      CaseStudiesTags: userData?.CaseStudiesTags,
    },
  });
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
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
  useEffect(() => {
    // Check if data and userData are available
    if (data && userData) {
      const statusOptions = data?.map((item) => ({
        value: item.categoryName,
        label: item.categoryName,
      }));

      // Filter the default options based on userData
      let defaultOptions = statusOptions?.filter((option) =>
        userData?.CaseStudiesCategory?.includes(option.value)
      );

      setSelectValue(defaultOptions);
    }
  }, [data, userData]);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const [content, setContent] = useState(userData?.CaseStudiesDescription);
  const [contentmssg, setContentMssg] = useState(false);
  const [CaseStudiesimage, setCaseStudiesimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("CaseStudiesImage", file, file.name);
    const result = await handleAddImageCaseStudies(formData);
    if (result.status === 200) {
      setCaseStudiesimage(result?.data?.imageUrl);
    }
  };

  const [CaseStudiesFile, setCaseStudiesFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleCaseStudiesFileClick = () => {
    fileInputRef.current.click();
  };
  const PostCaseStudiesFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("CaseStudiesFile", file, file.name);
    const result = await handleAddCaseStudiesFile(formData);
    if (result.status === 200) {
      setCaseStudiesFile(result?.data?.fileUrl);
    }
  };

  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.CaseStudiesTags;
    if (tags && tags.length > 0) {
      data.CaseStudiesTags = tags;
    } else {
      delete data.CaseStudiesTags;
    }
    const newData = {
      ...data,
      id: userData?.CaseStudiesLink,
      authorLink: data?.authorLink ? data?.authorLink : userData?.authorLink,
      metaTitle: data?.metaTitle ? data?.metaTitle : userData?.metaTitle,
      CaseStudiesFile: CaseStudiesFile
        ? CaseStudiesFile
        : userData?.CaseStudiesFile,
      metaDescription: data?.metaDescription
        ? data?.metaDescription
        : userData?.metaDescription,
      CaseStudiesCategory: selectValue
        ? selectValue
        : userData?.CaseStudiesCategory,
      CaseStudiesImage: CaseStudiesimage
        ? CaseStudiesimage
        : userData?.CaseStudiesImage,
      CaseStudiesDescription: content
        ? content
        : userData?.CaseStudiesDescription,
      status: selectActiveValue ? selectActiveValue?.value : userData?.status,
    };
    const result = await handleUpdateCaseStudies(newData);
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
          <h6 className="mb-0">Update CaseStudies</h6>
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
                id="CaseStudiesTitle"
                name="CaseStudiesTitle"
                label={"CaseStudies Title"}
                {...register("CaseStudiesTitle")}
                error={errors.CaseStudiesTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="CaseStudiesLink"
                name="CaseStudiesLink"
                label={"CaseStudies Link"}
                {...register("CaseStudiesLink")}
                error={errors.CaseStudiesLink?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">CaseStudies Image</div>
                <div className="image-container">
                  {CaseStudiesimage ? (
                    <img
                      src={BACKEND_URL + CaseStudiesimage}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + userData?.CaseStudiesImage}
                      name={userData?.caseStudiesTitle}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="CaseStudiesImage"
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
                <div className="brandimage mb-2">CaseStudies Content</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                defaultValue={userData?.CaseStudiesDescription}
                setContent={setContent}
                placeholder={"Start Typing caseStudies here..."}
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
                id="CaseStudiesSummary"
                name="CaseStudiesSummary"
                label={"CaseStudies Summary"}
                {...register("CaseStudiesSummary")}
                error={errors.CaseStudiesSummary?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="CaseStudiesAuthor"
                name="CaseStudiesAuthor"
                label={"CaseStudies Author"}
                {...register("CaseStudiesAuthor")}
                error={errors.CaseStudiesAuthor?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaDescription"
                name="CaseStudies metaDescription"
                label={"CaseStudies Meta Description"}
                {...register("metaDescription")}
                error={errors.metaDescription?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="metaTitle"
                name="Meta Title"
                label={"CaseStudies Meta Title"}
                {...register("metaTitle")}
                error={errors.metaTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="authorLink"
                name="CaseStudies Author Link"
                label={"CaseStudies Author Link"}
                {...register("authorLink")}
                error={errors.authorLink?.message}
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id="CaseStudiesTags"
                name="CaseStudiesTags"
                label={"CaseStudies Tags"}
                {...register("CaseStudiesTags")}
                error={errors.CaseStudiesTags?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="image-uploader-container">
                <div className="brandimage mb-2">CaseStudies File</div>
                <div className="image-container">
                  {CaseStudiesFile ? (
                    <img
                      src={BACKEND_URL + CaseStudiesFile}
                      alt="uploaded-item"
                    />
                  ) : (
                    <Avatar
                      src={BACKEND_URL + CaseStudiesFile}
                      name={`CaseStudiesFile`}
                      size="100"
                      className="ff-primary rounded-circle me-3"
                    />
                  )}
                  <input
                    id="CaseStudiesFile"
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => PostCaseStudiesFile(e)}
                    style={{ display: "none" }}
                  />
                </div>
                <IconButton
                  className={"add-image-icon"}
                  variant="primary"
                  icon={{ type: MdAddAPhoto }}
                  onClick={() => handleCaseStudiesFileClick()}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Select Case Study option</div>
              <Select
                isMulti
                options={statusOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Case Study Category"
              />
            </Col>
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={ActiveData}
                value={selectActiveValue}
                onChange={setSelectActiveValue}
                placeHolder="Select Case Study Active options"
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

EditCaseStudies.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditCaseStudies.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.caseStudies.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCategoryList(payload)),
  handleAddImageCaseStudies: (payload) =>
    dispatch(performImagePostCaseStudies(payload)),
  handleAddCaseStudiesFile: (payload) =>
    dispatch(performPostCaseStudiesFile(payload)),
  handleUpdateCaseStudies: (payload) =>
    dispatch(performUpdateCaseStudies(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCaseStudies);