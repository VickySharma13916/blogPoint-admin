import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import Input from "../../../components/Form/Input";
import IconButton from "../../../components/IconButton";
import {
  performAdminImagePost,
  performSignUp,
} from "../../../redux/actionCreators/authCreators";
import { signUpRules } from "../../../services/validations";
import { Link, useHistory } from "react-router-dom";
import { BACKEND_URL } from "../../../services/constants";

const SignUp = ({ handleSignUp, handleAddAdminImage, submitting }) => {
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
      history.push(`/login`);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 px-4 login_form">
      <Card
        border="light"
        className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
        style={{ maxWidth: 500 }}
      >
        <Card.Header>Admin Sign Up Form</Card.Header>
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
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-sm btn-outline-link p-0" to="/login">
                    Login
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.auth.submitting,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddAdminImage: (payload) => dispatch(performAdminImagePost(payload)),
  handleSignUp: (payload) => dispatch(performSignUp(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
