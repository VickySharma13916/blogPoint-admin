import DYNAMIC_FORM_TYPES from "../types/dynamicFormTypes";

export const getDynamicFormBegin = () => ({
  type: DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_BEGIN,
});

export const getDynamicFormSuccess = (data) => ({
  type: DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_SUCCESS,
  payload: data,
});

export const getDynamicFormFailure = (error) => ({
  type: DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_FAILURE,
  payload: error,
});
export const postDynamicFormBegin = () => ({
  type: DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_BEGIN,
});

export const postDynamicFormSuccess = (data) => ({
  type: DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_SUCCESS,
  payload: data,
});

export const postDynamicFormFailure = (error) => ({
  type: DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_FAILURE,
  payload: error,
});
export const updateDynamicFormBegin = () => ({
  type: DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_BEGIN,
});

export const updateDynamicFormSuccess = (data) => ({
  type: DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_SUCCESS,
  payload: data,
});

export const updateDynamicFormFailure = (error) => ({
  type: DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_FAILURE,
  payload: error,
});
export const deleteDynamicFormBegin = () => ({
  type: DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_BEGIN,
});

export const deleteDynamicFormSuccess = (data) => ({
  type: DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_SUCCESS,
  payload: data,
});

export const deleteDynamicFormFailure = (error) => ({
  type: DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_FAILURE,
  payload: error,
});
