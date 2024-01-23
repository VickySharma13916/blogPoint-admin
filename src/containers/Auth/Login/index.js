import React, { useEffect } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import Input from "../../../components/Form/Input";
import { performLogin } from "../../../redux/actionCreators/authCreators";
import { resetState } from "../../../redux/actions/authActions";
import { loginRules } from "../../../services/validations";

const Login = ({ isAuthenticated, submitting, handleLogin, reset }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: loginRules,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    const result = await handleLogin(data);
    if (result.sucess) {
      history.push(`/dashboard`);
    }
  };

  useEffect(() => {
    reset();
  }, [reset]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="page--login" className="h-100">
      <div className=" w-100 h-100 page--wrapper">
        <div className="d-flex flex-column align-items-center h-100 justify-content-center py-5 px-4 login_form">
          <Card
            border="light"
            className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
            style={{ maxWidth: 500 }}
          >
            <Card.Header>Sign in</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
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
                      {!submitting && <span>Sign In</span>}
                      {submitting && <Spinner animation="border" />}
                    </Button>
                    {/* <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 mt-3"
                    >
                      <Link to="/signup">
                        <span className="text-white">Sign Up</span>
                      </Link>
                    </Button> */}
                    <div className="d-flex justify-content-center mt-3">
                      <Link
                        className="btn btn-sm btn-outline-link p-0"
                        to="/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
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
  loginOtpSent: state.auth.loginOtpSent,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetState()),
  handleLogin: (payload) => dispatch(performLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
