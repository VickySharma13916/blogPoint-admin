import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdMarkEmailRead } from "react-icons/md";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Input from "../../../components/Form/Input";
import { performForgotPassword } from "../../../redux/actionCreators/authCreators";
import { forgotPasswordRules } from "../../../services/validations";

const ForgotPassword = ({ isAuthenticated, submitting, forgotPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: forgotPasswordRules,
    defaultValues: {
      email: "",
    },
  });
  const [success, setSuccess] = useState(null);

  const onSubmit = async (data) => {
    const result = await forgotPassword(data);
    setSuccess(result?.message);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="page--forgot-password" className="h-100">
      <div className=" w-100 h-100 page--wrapper">
        <div className="d-flex flex-column align-items-center h-100 justify-content-center py-5 px-4 forgot-password_form">
          <Card
            border="light"
            className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
            style={{ maxWidth: 500 }}
          >
            <Card.Header>Forgot Password</Card.Header>
            <Card.Body>
              {!success ? (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col xs={12}>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        label="Email Address"
                        {...register("email")}
                        error={errors.email?.message}
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

                      <div className="d-flex justify-content-center mt-3">
                        <Link
                          className="btn btn-sm btn-outline-link p-0"
                          to="/login"
                        >
                          Login
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              ) : (
                <div className="py-4 text-center">
                  <MdMarkEmailRead size={100} className="text-success" />
                  <h5 className="mt-4 mb-0">{success}</h5>
                </div>
              )}
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
  forgotPassword: (payload) => dispatch(performForgotPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
