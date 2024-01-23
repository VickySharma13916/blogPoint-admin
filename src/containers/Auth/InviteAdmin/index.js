import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Card, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import Page from "../../../components/Page";
import Input from "../../../components/Form/Input";
import { InviteAdminRules } from "../../../services/validations";
import { performEmailVerificationAdmin } from "../../../redux/actionCreators/authCreators";
import { useHistory, useLocation } from "react-router-dom";

const InviteAdmin = ({ submitting, handleEmailVerifyAdmin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: InviteAdminRules,
    defaultValues: {
      name: "",
      password: "",
      confirmpassword: "",
    },
  });
  const history = useHistory();
  const location = useLocation();
  const token = location.pathname.split("token=")[1];
  const onSubmit = async (data) => {
    const { name, password } = data;
    const newData = { name, password, token };
    const result = await handleEmailVerifyAdmin(newData);
    if (result) {
      history.push("/login");
    }
  };

  return (
    <Page
      id="page--emailverification"
      title="Emailverification"
      containerFluid={true}
      padding={false}
      className="h-100"
    >
      <div className=" w-100 h-100 page--wrapper">
        <div className="d-flex flex-column align-items-center h-100 justify-content-center py-5 px-4 login_form">
          <Card
            border="light"
            className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
            style={{ maxWidth: 500 }}
          >
            <Card.Header>Invite Admin</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12}>
                    <Input
                      id="name"
                      name="name"
                      label="Name"
                      {...register("name")}
                      error={errors.name?.message}
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
                  <Col xs={12}>
                    <Input
                      id="confirmpassword"
                      type="password"
                      name="confirmpassword"
                      label="Confirm Password"
                      {...register("confirmpassword")}
                      error={errors.confirmpassword?.message}
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
    </Page>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.auth.submitting,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleEmailVerifyAdmin: (payload) =>
    dispatch(performEmailVerificationAdmin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteAdmin);
