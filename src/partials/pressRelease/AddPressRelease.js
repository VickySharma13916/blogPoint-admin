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
import Select from "../../components/Form/Select";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performImagePostPressRelease,
  performPostPressRelease,
} from "../../redux/actionCreators/pressReleaseCreators";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    pressReleaseName: yup.string().required(),
    pressReleaseLink: yup.string().required(),
  })
  .required();

const AddPressRelease = ({
  submitting,
  handleAddPressRelease,
  handleAddImageAnnouncement,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
  const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [pressReleaseImage, setpressReleaseImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("type", "image");
    formData.append("pressReleaseImage", file, file.name);
    const result = await handleAddImageAnnouncement(formData);
    if (result.status === 200) {
      setpressReleaseImage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      pressReleaseImage: pressReleaseImage,
      status: selectValue?.value,
    };
    const result = await handleAddPressRelease(newData);
    if (result.status === 200) {
      history.push("/pressRelease");
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
          <h6 className="mb-0">Add Press Release</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="pressReleaseName"
              name="pressReleaseName"
              label={"Press Release Name"}
              {...register("pressReleaseName")}
              error={errors.pressReleaseName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              type="text"
              id="pressReleaseLink"
              name="pressReleaseLink"
              label={"Press Release Link"}
              {...register("pressReleaseLink")}
              error={errors.pressReleaseLink?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Press Release Image</div>
              <div className="image-container">
                {pressReleaseImage ? (
                  <img
                    src={BACKEND_URL + pressReleaseImage}
                    alt="uploaded-item"
                  />
                ) : (
                  <Avatar
                    src={BACKEND_URL + pressReleaseImage}
                    name="Press Release Image"
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="pressReleaseImage"
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
            <div className="brandimage mb-2">Published option</div>
            <Select
              options={ActiveData}
              value={selectValue}
              onChange={setSelectValue}
              placeHolder="Select Press Release options"
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

AddPressRelease.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddPressRelease.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.pressRelease.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddImageAnnouncement: (payload) =>
    dispatch(performImagePostPressRelease(payload)),
  handleAddPressRelease: (payload) =>
    dispatch(performPostPressRelease(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPressRelease);
