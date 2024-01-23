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
import { performUpdateDynamicForm } from "../../redux/actionCreators/dynamicFormCreators";
import { performGetInputCategoryList } from "../../redux/actionCreators/inputCategoryCreators";
import EditDynamicInput from "./EditDynamicInput";
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

const EditDynamicForm = ({
  submitting,
  handleEditDynamicForm,
  history,
  getInputTypeDetail,
}) => {
  const userData = history.location.state?.data;
  const value = userData?.inputLink;
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      inputLink: userData.inputLink,
      status: userData?.status,
    },
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
  const statusActiveOptions = ActiveData?.map((item) => ({
    value: item.value,
    label: item.label,
  }));
  const defaultStatusOption = statusActiveOptions.find(
    (option) => option.value === userData?.status
  );
  const [selectActiveValue, setSelectActiveValue] = useState(
    defaultStatusOption ? [defaultStatusOption] : []
  );
  const onSubmit = async (data) => {
    const updatedFormData = {
      id: userData?._id,
      status: selectActiveValue ? selectActiveValue?.value : userData?.status,
      inputLink: data.inputLink ? data?.inputLink : userData?.inputLink,
      inputField: data.inputField.map((field) => ({
        ...field,
        options: field.options
          ? field.options.split(",").map((item) => item.trim())
          : [],
      })),
    };
    const result = await handleEditDynamicForm(updatedFormData);
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
          <h6 className="mb-0">Update Dynamic Form</h6>
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
            value={value}
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
          <EditDynamicInput
            register={register}
            setValue={setValue}
            control={control}
            userData={userData?.inputField}
            reset={reset}
            getInputTypeDetail={getInputTypeDetail}
          />
        </Col>
        <Col xs={8} className="mt-4 mb-2 mx-auto">
          <Button type="submit" variant="secondary" className={`px-3 w-100`}>
            Update
          </Button>
        </Col>
      </Form>
    </Portal>
  );
};

EditDynamicForm.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditDynamicForm.defaultProps = {
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
  handleEditDynamicForm: (payload) =>
    dispatch(performUpdateDynamicForm(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDynamicForm);
