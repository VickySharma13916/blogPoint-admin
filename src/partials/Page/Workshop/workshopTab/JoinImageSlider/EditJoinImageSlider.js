import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import {
  performPostImageWorkshop,
  performUpdateWorkshopDetail,
} from "../../../../../redux/actionCreators/workshopCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const schema = yup
  .object({
    joinDescription: yup.string().required(),
  })
  .required();

const EditJoinImageSlider = ({
  submitting,
  handleAddImageCourse,
  handleEditJoinImageSlider,
  history,
}) => {
  const userData = history.location.state?.data;
  const courseId = history?.location?.pathname;
  const pathSegments = courseId.split("/");
  const firstID = pathSegments[3];
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      joinDescription: userData?.joinDescription,
    },
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
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
  const isMobile = useWindowSize();
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type: "joinImage",
      courseId: firstID,
      accordionId: id,
      joinImage: joinImage ? joinImage : userData?.joinImage,
    };
    const result = await handleEditJoinImageSlider(newData);
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
          <h6 className="mb-0">Update Join Image Slider</h6>
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
              label={"workshop Join Image Slider"}
              {...register("joinDescription")}
              error={errors.joinDescription?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Join Image Slider</div>
              <div className="image-container">
                {joinImage ? (
                  <img src={BACKEND_URL + joinImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.joinImage}
                    name={userData?.studentName}
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
              {!submitting && <span>Update</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

EditJoinImageSlider.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditJoinImageSlider.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditJoinImageSlider: (payload) =>
    dispatch(performUpdateWorkshopDetail(payload)),
  handleAddImageworkshop: (payload) =>
    dispatch(performPostImageWorkshop(payload, "joinImage")),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditJoinImageSlider);
