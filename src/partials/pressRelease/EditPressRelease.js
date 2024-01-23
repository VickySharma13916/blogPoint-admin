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
  performUpdatePressRelease,
} from "../../redux/actionCreators/pressReleaseCreators";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    pressReleaseName: yup.string().required(),
    pressReleaseLink: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

const EditPressRelease = ({
  submitting,
  handleAddImageAnnouncement,
  handleUpdateAnnouncement,
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
      pressReleaseLink: userData?.pressReleaseLink,
      pressReleaseImage: userData?.pressReleaseImage,
      pressReleaseName: userData?.pressReleaseName,
      status: userData?.status,
    },
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
  const statusOptions = ActiveData?.map((item) => ({
    value: item.value,
    label: item.label,
  }));
  const defaultStatusOption = statusOptions.find(
    (option) => option.value === userData?.status
  );
  const [selectValue, setSelectValue] = useState(
    defaultStatusOption ? [defaultStatusOption] : []
  );
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [pressReleaseImage, setPressReleaseImage] = useState(null);
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
      setPressReleaseImage(result?.data?.imageUrl);
    }
  };
  const onSubmit = async (data) => {
    const newData = {
      ...data,
      id: userData?._id,
      pressReleaseImage: pressReleaseImage
        ? pressReleaseImage
        : userData?.pressReleaseImage,
      status: selectValue ? selectValue?.value : userData?.status,
    };
    const result = await handleUpdateAnnouncement(newData);
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
          <h6 className="mb-0">Update Press Release</h6>
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
                    src={BACKEND_URL + userData?.pressReleaseImage}
                    name={userData?.pressReleaseName}
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
              {!submitting && <span>Update</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

EditPressRelease.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditPressRelease.defaultProps = {
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
  handleUpdateAnnouncement: (payload) =>
    dispatch(performUpdatePressRelease(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPressRelease);
