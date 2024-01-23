import React, { useCallback, useEffect } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../../components/Form/Input";
import {
  performForgotPasswordEmailVerificationAdmin,
  performResetPassword,
} from "../../../redux/actionCreators/authCreators";
import { resetPasswordRules } from "../../../services/validations";

const ResetPassword = ({ submitting, resetPassword, forgotPasswordVerify }) => {
  const history = useHistory();
  const location = useLocation();
  const email = location.pathname.split("/")[2];
  const token = location.pathname.split("token=")[1];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resetPasswordRules,
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const verifyForgotPassword = useCallback(
    async (data) => {
      await forgotPasswordVerify(data);
    },
    [forgotPasswordVerify]
  );
  useEffect(() => {
    const newData = {
      email,
      token,
    };
    verifyForgotPassword(newData);
  }, [verifyForgotPassword, email, token]);

  const onSubmit = async (data) => {
    const newData = {
      email,
      password: data?.password,
    };
    const result = await resetPassword(newData);
    if (result.status === 200) {
      history.push("/login");
    }
  };

  return (
    <div id="page--reset-password" className="h-100">
      <div className="w-100 h-100 page--wrapper">
        <div className="d-flex flex-column align-items-start justify-content-center py-5 px-4 reset-password_form">
          <Card
            border="light"
            className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
            style={{ maxWidth: 500 }}
          >
            <Card.Header>Reset Password</Card.Header>
            <Card.Body>
              {/* <Form> */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
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

                  <Col xs={12}>
                    <Input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                      {...register("confirmPassword")}
                      error={errors.confirmPassword?.message}
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
                      {!submitting && <span>Submit</span>}
                      {submitting && <Spinner animation="border" />}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.auth.submitting,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (payload) => dispatch(performResetPassword(payload)),
  forgotPasswordVerify: (payload) =>
    dispatch(performForgotPasswordEmailVerificationAdmin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
