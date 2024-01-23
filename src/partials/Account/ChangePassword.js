import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { resetState } from "../../redux/actions/accountActions";
import { performUpdatePassword } from "../../redux/actionCreators/accountCreators";

import { BiArrowBack } from "react-icons/bi";
import { Card, Row, Col, Button, Form, Spinner } from "react-bootstrap";

import Input from "../../components/Form/Input";
import Page from "../../components/Page";

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
    history.push("/account");
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page id="page--account" title="Account" className="h-100">
      <Card
        border="light"
        className="w-100 mx-auto px-4 pt-3 pb-4 my-5 position-relative profile__edit"
        style={{ maxWidth: 500 }}
      >
        <Card.Header className="d-flex align-items-center">
          <Link to="/account" className="btn btn-link px-0 me-3" title="Back">
            <BiArrowBack size={24} />
          </Link>
          Change Password
        </Card.Header>
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
  handleUpdate: (payload) => dispatch(performUpdatePassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
