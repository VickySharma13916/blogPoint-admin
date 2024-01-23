import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performAdminImagePost,
  performSignUp,
} from "../../redux/actionCreators/authCreators";
import { BACKEND_URL } from "../../services/constants";
import { signUpRules } from "../../services/validations";

const AddAdmin = ({ handleSignUp, handleAddAdminImage, submitting }) => {
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: signUpRules,
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
    },
  });

  const [adminImage, setadminImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleadminImageClick = () => {
    fileInputImageRef.current.click();
  };

  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("adminImage", file, file.name);
    const result = await handleAddAdminImage(formData);
    if (result.status === 200) {
      setadminImage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      adminImage: adminImage,
    };
    const result = await handleSignUp(newData);
    if (result.status === 200) {
      history.push(`/admin`);
    }
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
          <h6 className="mb-0">Add Admin Sign Up Form</h6>
        </>
      }
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Card border="light" className="w-100 mx-autoF">
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col xs={12}>
                  <div className="image-uploader-container">
                    <div className="brandimage pb-2">Admin Image</div>
                    <div className="image-container">
                      <Avatar
                        src={BACKEND_URL + adminImage}
                        name="Admin Image"
                        size="100"
                        className="ff-primary rounded-circle me-3"
                      />
                      <input
                        id="clientImage"
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
                      onClick={() => handleadminImageClick()}
                    />
                  </div>
                </Col>
                <Col xs={12}>
                  <Input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    {...register("firstName")}
                    error={errors.firstName?.message}
                  />
                </Col>
                <Col xs={12}>
                  <Input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    {...register("lastName")}
                    error={errors.lastName?.message}
                  />
                </Col>
                <Col xs={12}>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    {...register("mobileNumber")}
                    error={errors.mobileNumber?.message}
                  />
                </Col>
                <Col xs={12}>
                  <Input
                    id="email"
                    name="email"
                    label="Email address"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </Col>

                <Col xs={12}>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </Col>
                <Col xs={12} className="pt-4 position-relative">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className={`w-100`}
                    disabled={submitting}
                  >
                    {!submitting && <span>Submit </span>}
                    {submitting && <Spinner animation="border" />}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Portal>
  );
};

AddAdmin.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddAdmin.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.auth.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddAdminImage: (payload) => dispatch(performAdminImagePost(payload)),
  handleSignUp: (payload) => dispatch(performSignUp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAdmin);
