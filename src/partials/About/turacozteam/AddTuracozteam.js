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
  performPostTuracozTeam,
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

const AddTuracozTeam = ({
  updating,
  performImageUpdate,
  AddTuracozTeam,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
  const [selectValue, setSelectValue] = useState(null);
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
      teamCategory: selectValue,
      teamImage: brandimage,
    };
    const result = await AddTuracozTeam(newData);
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
          <h6 className="mb-0">Add Team Member</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="teamName"
              name="teamName"
              label="team Name"
              {...register("teamName")}
              error={errors.teamName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="teamDesignation"
              name="teamDesignation"
              label="team Designation"
              {...register("teamDesignation")}
              error={errors.teamDesignation?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="teamAbout"
              name="teamAbout"
              label="team About"
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
                    src={BACKEND_URL + brandimage}
                    name={`teamImage`}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="teamImage"
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
              {!updating && <span>Add</span>}
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
  AddTuracozTeam: (payload) => dispatch(performPostTuracozTeam(payload)),
  performImageUpdate: (payload) =>
    dispatch(performteamImageTuracozTeam(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTuracozTeam);
