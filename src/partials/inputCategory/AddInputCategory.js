import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import { performPostInputCategory } from "../../redux/actionCreators/inputCategoryCreators";

const schema = yup
  .object({
    type: yup.string().required(),
  })
  .required();

const AddInputCategory = ({ submitting, history, handleAddInputCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();

  const onSubmit = async (data) => {
    const result = await handleAddInputCategory(data);
    if (result.status === 200) {
      history.push("/inputCategory");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
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
          <h6 className="mb-0">Add Input Field Category</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              type="text"
              id="type"
              name="type"
              label={"Input Field Type"}
              {...register("type")}
              error={errors.type?.message}
            />
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button type="submit" variant="secondary" className={`px-3 w-100`}>
              {!submitting && <span>Add</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

AddInputCategory.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
};

AddInputCategory.defaultProps = {
  width: "60%",
  refresh: () => null,
};

const mapStateToProps = (state) => ({
  submitting: state.inputCategory.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddInputCategory: (payload) =>
    dispatch(performPostInputCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInputCategory);
