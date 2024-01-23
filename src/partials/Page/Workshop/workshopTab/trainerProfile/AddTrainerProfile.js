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
  performPostImageWorkshop,
  performPostWorkshopDetail,
} from "../../../../../redux/actionCreators/workshopCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const schema = yup
  .object({
    trainerName: yup.string().required(),
    trainerDesignation: yup.string().required(),
  })
  .required();

const AddTrainingProfile = ({
  submitting,
  handleAddTrainingProfile,
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
  const [trainerImage, setTrainerImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "trainerImage");
    formData.append("trainerImage", file, file?.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setTrainerImage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      type: "trainingProfile",
      courseId: id,
      trainerImage: trainerImage,
    };
    const result = await handleAddTrainingProfile(newData);
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
          <h6 className="mb-0">Add Trainer Profile</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="trainerName"
              name="trainerName"
              label={"workshop Trainer Name"}
              {...register("trainerName")}
              error={errors.trainerName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="trainerDesignation"
              name="trainerDesignation"
              label={"workshop Trainer Designation"}
              {...register("trainerDesignation")}
              error={errors.trainerDesignation?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="trainerCompany"
              name="trainerCompany"
              label={"workshop Trainer Company"}
              {...register("trainerCompany")}
              error={errors.trainerCompany?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Trainer Image</div>
              <div className="image-container">
                {trainerImage ? (
                  <img src={BACKEND_URL + trainerImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + trainerImage}
                    name={`trainerImage`}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="trainerImage"
                  type="file"
                  name="trainerImage"
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

AddTrainingProfile.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddTrainingProfile.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTrainingProfile: (payload) =>
    dispatch(performPostWorkshopDetail(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performPostImageWorkshop(payload, "trainerImage")),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainingProfile);
