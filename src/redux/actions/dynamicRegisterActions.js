import DYNAMIC_REGISTER_FORM_TYPES from "../types/dynamicRegisterTypes";

export const getDynamicRegisterFormBegin = () => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_BEGIN,
});

export const getDynamicRegisterFormSuccess = (data) => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_SUCCESS,
  payload: data,
});

export const getDynamicRegisterFormFailure = (error) => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_FAILURE,
  payload: error,
});

export const deleteDynamicRegisterFormBegin = () => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_BEGIN,
});

export const deleteDynamicRegisterFormSuccess = (data) => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_SUCCESS,
  payload: data,
});

export const deleteDynamicRegisterFormFailure = (error) => ({
  type: DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_FAILURE,
  payload: error,
});
