import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../../components/Form/Input";
import IconButton from "../../../components/IconButton";
import Portal from "../../../components/Portal";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performUpdateImageSliderAbout,
  performteamImageImageSliderAbout,
} from "../../../redux/actionCreators/aboutCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    turacozAboutImage: yup.string().required(),
  })
  .required();

const EditImageTuracoz = ({
  updating,
  performImageUpdate,
  updateImageTuracoz,
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
      turacozAboutImage: userData?.turacozAboutImage,
      turacozImage: userData?.turacozImage,
    },
  });

  const [openState, setOpenState] = useState(true);
  const handleOnClose = () => {
    setOpenState(false);
  };
  const isMobile = useWindowSize();
  const [brandimage, setBrandimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };

  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("turacozImage", file, file.name);
    const result = await performImageUpdate(formData);
    if (result.status === 200) {
      setBrandimage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      id: userData?._id,
      turacozImage: brandimage ? brandimage : userData?.turacozImage,
    };
    const result = await updateImageTuracoz(newData);
    if (result.status === 200) {
      history.push("/about");
    }
  };

  return (
    <Portal
      open={openState}
      width={isMobile ? "100%" : "60%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Update Image Slider</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="turacozAboutImage"
              name="turacozAboutImage"
              label="Turacoz About Image"
              {...register("turacozAboutImage")}
              error={errors.turacozAboutImage?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage">Turacoz about Image</div>
              <div className="image-container">
                {brandimage ? (
                  <img src={BACKEND_URL + brandimage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.turacozImage}
                    name={userData?.turacozAboutImage}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="turacozImage"
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
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button
              type="submit"
              variant="secondary"
              className={`px-3 mx-auto w-100 w-md-75`}
            >
              {!updating && <span>Update</span>}
              {updating && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  updating: state.about.updating,
});

const mapDispatchToProps = (dispatch) => ({
  updateImageTuracoz: (payload) =>
    dispatch(performUpdateImageSliderAbout(payload)),
  performImageUpdate: (payload) =>
    dispatch(performteamImageImageSliderAbout(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditImageTuracoz);
