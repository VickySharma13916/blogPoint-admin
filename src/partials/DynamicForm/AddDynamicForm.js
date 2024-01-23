import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import { performPostDynamicForm } from "../../redux/actionCreators/dynamicFormCreators";
import { performGetInputCategoryList } from "../../redux/actionCreators/inputCategoryCreators";
import DynamicInput from "./AddDynamicInput";
import Select from "../../components/Form/Select";

const schema = yup
  .object({
    inputLink: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Input Link must not contain special characters"
      ),
  })
  .required();

const AddDynamicForm = ({
  submitting,
  handleAddDynamicForm,
  history,
  getInputTypeDetail,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [selectValue, setSelectValue] = useState(null);
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const ActiveData = [
    {
      value: true,
      label: "Published",
    },
    {
      value: false,
      label: "Draft",
    },
  ];
  const [selectActiveValue, setSelectActiveValue] = useState(null);
  const onSubmit = async (data) => {
    const updatedFormData = {
      inputLink: data.inputLink,
      status: selectActiveValue?.value,
      inputField: data.inputField.map((field) => ({
        ...field,
        options: field.options
          ? field.options.split(",").map((item) => item.trim())
          : [],
      })),
    };
    const result = await handleAddDynamicForm(updatedFormData);
    if (result.status === 200) {
      history.push("/dynamicForm");
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
          <h6 className="mb-0">Add Dynamic Form</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Col xs={12}>
          <Input
            type="text"
            id="inputLink"
            name="inputLink"
            label={"Input Field Link"}
            {...register("inputLink")}
            error={errors.inputLink?.message}
          />
        </Col>
        <Col xs={12}>
          <div className="brandimage mb-2">Published option</div>
          <Select
            options={ActiveData}
            value={selectActiveValue}
            onChange={setSelectActiveValue}
            placeHolder="Select Dynamic Input Field Active options"
          />
        </Col>
        <Col xs={12}>
          <DynamicInput
            register={register}
            setValue={setValue}
            control={control}
            getInputTypeDetail={getInputTypeDetail}
          />
        </Col>
        <Col xs={8} className="mt-4 mb-2 mx-auto">
          <Button type="submit" variant="secondary" className={`px-3 w-100`}>
            Submit
          </Button>
        </Col>
      </Form>
    </Portal>
  );
};

AddDynamicForm.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddDynamicForm.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.dynamicForm.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getInputTypeDetail: (payload) =>
    dispatch(performGetInputCategoryList(payload)),
  handleAddDynamicForm: (payload) => dispatch(performPostDynamicForm(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDynamicForm);
