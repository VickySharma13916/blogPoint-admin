import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performAddMetaImage,
  performPostSeoData,
} from "../../redux/actionCreators/seoDataCreators";
import { MdAddAPhoto } from "react-icons/md";
import { BACKEND_URL } from "../../services/constants";
import Avatar from "react-avatar";

const schema = yup
  .object({
    metaTitle: yup
      .string()
      .required()
      .max(60, "Meta Title must be at most 60 characters"),
    metaDescription: yup
      .string()
      .required()
      .max(160, "Meta Description must be at most 160 characters"),
    name: yup.string().required(),
  })
  .required();
const AddSeodata = ({
  submitting,
  handleAddSeodata,
  handleAddMetaImage,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [metaImage, setMetaImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const PostMetaImages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("metaImage", file, file.name);
    const result = await handleAddMetaImage(formData);
    if (result.status === 200) {
      setMetaImage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      metaImage: metaImage,
    };
    const result = await handleAddSeodata(newData);
    if (result.status === 200) {
      history.push("/seodata");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "50%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Add SEO Data</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Meta Image</div>
              <div className="image-container">
                {metaImage ? (
                  <img src={BACKEND_URL + metaImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + metaImage}
                    name={"Meta Image"}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="metaImage"
                  type="file"
                  ref={fileInputImageRef}
                  onChange={(e) => PostMetaImages(e)}
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
            <Input
              type="text"
              id="metaDescription"
              name="Meta Description"
              label={"Meta Description"}
              {...register("metaDescription")}
              error={errors.metaDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="metaTitle"
              name="Meta Title"
              label={"Meta Title"}
              {...register("metaTitle")}
              error={errors.metaTitle?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="metaKeywords"
              name="MetaKeywords"
              label={"Meta Keywords"}
              {...register("metaKeywords")}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="name"
              name="Meta name"
              label={"Meta Name"}
              {...register("name")}
              error={errors.name?.message}
            />
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button type="submit" variant="secondary" className={`px-3 w-100`}>
              {!submitting && <span>Add</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.seodata.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddMetaImage: (payload) => dispatch(performAddMetaImage(payload)),
  handleAddSeodata: (payload) => dispatch(performPostSeoData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSeodata);
