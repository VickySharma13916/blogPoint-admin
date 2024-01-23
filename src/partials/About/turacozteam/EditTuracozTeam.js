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
  performUpdateTuracozTeam,
  performteamImageTuracozTeam,
} from "../../../redux/actionCreators/aboutCreators";
import ReactSelect from "react-select";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    teamName: yup.string().required(),
    teamAbout: yup.string().required(),
    teamDesignation: yup.string().required(),
  })
  .required();

const EditTuracozTeam = ({
  updating,
  performImageUpdate,
  EditTuracozTeam,
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
      teamName: userData?.teamName,
      teamDesignation: userData?.teamDesignation,
      teamAbout: userData?.teamAbout,
      teamImage: userData?.teamImage,
      teamCategory: userData?.teamCategory,
    },
  });
  const statusOptions = [
    {
      value: "Leadership Member",
      label: "Leadership Member",
    },
    {
      value: "Core Member",
      label: "Core Member",
    },
  ];
  let defaultOptions = statusOptions?.filter((option) =>
    userData?.teamCategory?.includes(option.value)
  );

  const [selectValue, setSelectValue] = useState(defaultOptions);
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
    formData.append("teamImage", file, file.name);
    const result = await performImageUpdate(formData);
    if (result.status === 200) {
      setBrandimage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      teamCategory: selectValue ? selectValue : defaultOptions,
      teamImage: brandimage ? brandimage : userData?.teamImage,
      id: userData?._id,
    };
    const result = await EditTuracozTeam(newData);
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
          <h6 className="mb-0">Update Team Member</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="teamName"
              name="teamName"
              label="Team Name"
              {...register("teamName")}
              error={errors.teamName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="teamDesignation"
              name="teamDesignation"
              label="Team Designation"
              {...register("teamDesignation")}
              error={errors.teamDesignation?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="teamAbout"
              name="teamAbout"
              label="team Address"
              {...register("teamAbout")}
              error={errors.teamAbout?.message}
            />
          </Col>
          <Col xs={12}>
            <ReactSelect
              options={statusOptions}
              value={selectValue}
              onChange={setSelectValue}
              placeHolder="Select Team Category"
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage">Team Member Image</div>
              <div className="image-container">
                {brandimage ? (
                  <img src={BACKEND_URL + brandimage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + userData?.teamImage}
                    name={userData?.teamName}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="brandImage"
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
  EditTuracozTeam: (payload) => dispatch(performUpdateTuracozTeam(payload)),
  performImageUpdate: (payload) =>
    dispatch(performteamImageTuracozTeam(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTuracozTeam);
