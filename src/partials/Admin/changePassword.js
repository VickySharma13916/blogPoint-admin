import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import { performUpdatePassword } from "../../redux/actionCreators/accountCreators";
import { resetState } from "../../redux/actions/accountActions";

import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";

import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";

const schema = yup
  .object({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .required("New password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  })
  .required();

const ChangePassword = ({ submitting, error, reset, user, handleUpdate }) => {
  const history = useHistory();
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      email: user?.email,
    };
    const result = await handleUpdate(newData);
    if (!result) return false;
    history.push("/admin");
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h6 className="mb-0">Change Admin Profile Password</h6>
        </>
      }
    >
      <Card className="w-100 mx-auto position-relative">
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={12}>
                <Input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  label="Current Password"
                  {...register("currentPassword")}
                  error={errors.currentPassword?.message}
                />
              </Col>

              <Col xs={12}>
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  {...register("newPassword")}
                  error={errors.newPassword?.message}
                />
              </Col>

              <Col xs={12}>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />
              </Col>

              <Col xs={12} className="pt-4 position-relative text-center">
                {error && (
                  <span className="text-danger position-absolute form-error">
                    {error}
                  </span>
                )}
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
        </Card.Body>
      </Card>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.account.submitting,
  user: state.auth.user,
  error: state.account.error,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetState()),
  handleUpdate: (payload) => dispatch(performUpdatePassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
