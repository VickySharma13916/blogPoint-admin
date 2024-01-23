import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import { performUpdateProfile } from "../../redux/actionCreators/accountCreators";
import { performAdminImagePost } from "../../redux/actionCreators/authCreators";
import { resetState } from "../../redux/actions/accountActions";
import useWindowSize from "../../hooks/UseWindowSize";
import Page from "../../components/Page";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mobileNumber: yup.string().required(),
  })
  .required();

const EditProfile = ({
  user,
  submitting,
  reset,
  handleUpdate,
  handleAddAdminImage,
}) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      mobileNumber: user?.mobileNumber,
    },
  });
  const [adminImage, setadminImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleadminImageClick = () => {
    fileInputImageRef.current.click();
  };

  const adminImageUrl = user?.adminImage;
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
      id: user?._id,
      adminImage: adminImage ? adminImage : adminImageUrl,
    };
    const result = await handleUpdate(newData);
    if (!result) return false;
    history.push("/account");
  };

  const isMobile = useWindowSize();

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page id="page--account" title="Account" className="h-100">
      <Card
        border="light"
        className={`w-100 mx-auto px-4 pt-3 pb-4 my-5 position-relative profile__edit ${
          isMobile && "p-0"
        }`}
        style={{ maxWidth: 500 }}
      >
        <Card.Header className="d-flex align-items-center">
          <Link to="/account" className="btn btn-link px-0 me-3" title="Back">
            <BiArrowBack size={24} />
          </Link>
          Edit Admin Profile
        </Card.Header>
        <Card.Body>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col xs={12}>
                  <div className="image-uploader-container">
                    <div className="brandimage pb-2">Admin Image</div>
                    <div className="image-container">
                      {adminImage ? (
                        <img
                          src={BACKEND_URL + adminImage}
                          alt="uploaded-item"
                        />
                      ) : (
                        <Avatar
                          src={BACKEND_URL + adminImageUrl}
                          name="Admin Image"
                          size="100"
                          className="ff-primary rounded-circle me-3"
                        />
                      )}
                      <input
                        id="adminImage"
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
                <Col xs={12} md={12}>
                  <Input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    {...register("firstName")}
                    error={errors.firstName?.message}
                  />
                </Col>
                <Col xs={12} md={12}>
                  <Input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    {...register("lastName")}
                    error={errors.lastName?.message}
                  />
                </Col>
                <Col xs={12} md={12}>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    label="Mobile Number"
                    {...register("mobileNumber")}
                    error={errors.mobileNumber?.message}
                  />
                </Col>
                <Col xs={12} className="pt-4 position-relative text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      type="submit"
                      variant="primary"
                      className={`px-5`}
                      disabled={submitting}
                    >
                      {!submitting && <span>Update</span>}
                      {submitting && <Spinner animation="border" size="sm" />}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.account.submitting,
  user: state.auth.user,
  error: state.account.error,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetState()),
  handleUpdate: (payload) => dispatch(performUpdateProfile(payload)),
  handleAddAdminImage: (payload) => dispatch(performAdminImagePost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
