import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import {
  performPostImageWebinar,
  performPostWebinarDetail,
} from "../../../../../redux/actionCreators/webinarCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const schema = yup
  .object({
    joinDescription: yup.string().required(),
  })
  .required();

const AddJoinImageSlider = ({
  submitting,
  handleAddJoinImageSlider,
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
  const [joinImage, setJoinImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "joinImage");
    formData.append("joinImage", file, file?.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setJoinImage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type: "joinImage",
      courseId: id,
      joinImage: joinImage,
    };
    const result = await handleAddJoinImageSlider(newData);
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
          <h6 className="mb-0">Add Join Image Slider</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="joinDescription"
              name="joinDescription"
              label={"course Join Description"}
              {...register("joinDescription")}
              error={errors.joinDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Testimonial Image</div>
              <div className="image-container">
                {joinImage ? (
                  <img src={BACKEND_URL + joinImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + joinImage}
                    name={`Join Image Slider`}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="joinImage"
                  type="file"
                  name="joinImage"
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

AddJoinImageSlider.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddJoinImageSlider.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.webinar.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddJoinImageSlider: (payload) =>
    dispatch(performPostWebinarDetail(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performPostImageWebinar(payload, "joinImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddJoinImageSlider);
