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
  performPostLifeAtTuracozTeam,
  performteamImageLifeAtTuracozTeam,
} from "../../../redux/actionCreators/aboutCreators";
import { BACKEND_URL } from "../../../services/constants";

const schema = yup
  .object({
    turacozteamName: yup.string().required(),
    turacozteamAbout: yup.string().required(),
    turacozteamDesignation: yup.string().required(),
  })
  .required();

const AddLifeAtTuracoz = ({
  updating,
  performImageUpdate,
  performAddLifeAtTuracoz,
  history,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      turacozteamName: "",
      turacozteamDesignation: "",
      turacozteamAbout: "",
      turacozteamImage: "",
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
    formData.append("turacozteamImage", file, file.name);
    const result = await performImageUpdate(formData);
    if (result.status === 200) {
      setBrandimage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      turacozteamImage: brandimage,
    };
    const result = await performAddLifeAtTuracoz(newData);
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
          <h6 className="mb-0">Add Life At BlogPoint Team Member</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="turacozteamName"
              name="turacozteamName"
              label="turacozteam Name"
              {...register("turacozteamName")}
              error={errors.turacozteamName?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="turacozteamDesignation"
              name="turacozteamDesignation"
              label="turacozteam Designation"
              {...register("turacozteamDesignation")}
              error={errors.turacozteamDesignation?.message}
            />
          </Col>
          <Col xs={12}>
            <Input
              id="turacozteamAbout"
              name="turacozteamAbout"
              label="turacozteam About"
              {...register("turacozteamAbout")}
              error={errors.turacozteamAbout?.message}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage">BlogPoint Team Member Image</div>
              <div className="image-container">
                {brandimage ? (
                  <img src={BACKEND_URL + brandimage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + brandimage}
                    name={`turacozteamImage`}
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
  performAddLifeAtTuracoz: (payload) =>
    dispatch(performPostLifeAtTuracozTeam(payload)),
  performImageUpdate: (payload) =>
    dispatch(performteamImageLifeAtTuracozTeam(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLifeAtTuracoz);
