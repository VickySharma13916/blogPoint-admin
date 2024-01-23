import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performImagePosthHeaderAdd,
  performUpdateHeaderAdd,
} from "../../redux/actionCreators/headerAddCreators";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    headerAddLink: yup.string().required(),
  })
  .required();

const EditHeaderAdd = ({
  submitting,
  handleEditHeaderAdd,
  handleAddImageCourse,
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
      headerAddImage: userData?.headerAddImage,
      headerAddLink: userData?.headerAddLink,
    },
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const [headerAddImage, setheaderAddImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };

  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("headerAddImage", file, file?.name);
    const result = await handleAddImageCourse(formData);
    if (result.status === 200) {
      setheaderAddImage(result?.data?.imageUrl);
    }
  };

  const isMobile = useWindowSize();

  const onSubmit = async (data) => {
    const newData = {
      id: userData?._id,
      headerAddLink: data?.headerAddLink,
      headerAddImage: headerAddImage
        ? headerAddImage
        : userData?.headerAddImage,
    };
    const result = await handleEditHeaderAdd(newData);
    if (result.status === 200) {
      history.goBack();
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
          <h6 className="mb-0">Update Header Advertisement</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Header Addvertisement Image</div>
              <div className="image-container">
                {headerAddImage ? (
                  <img src={BACKEND_URL + headerAddImage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.headerAddImage}
                    name={`Header Advertise Image`}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="headerAddImage"
                  type="file"
                  name="headerAddImage"
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
            <Input
              type="text"
              id="headerAddLink"
              name="headerAddLink"
              label={"Header Add Link"}
              {...register("headerAddLink")}
              error={errors.headerAddLink?.message}
            />
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

EditHeaderAdd.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditHeaderAdd.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.headerAdd.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditHeaderAdd: (payload) => dispatch(performUpdateHeaderAdd(payload)),
  handleAddImageCourse: (payload) =>
    dispatch(performImagePosthHeaderAdd(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditHeaderAdd);
