import HEADER_TYPES from "../types/headerTypes";

export const resetState = () => ({
  type: HEADER_TYPES.RESET_STATE,
});

export const getHeaderBegin = () => ({
  type: HEADER_TYPES.GET_HEADER_BEGIN,
});

export const getHeaderSuccess = (data) => ({
  type: HEADER_TYPES.GET_HEADER_SUCCESS,
  payload: data,
});

export const getHeaderFailure = (error) => ({
  type: HEADER_TYPES.GET_HEADER_FAILURE,
  payload: error,
});
export const postHeaderBegin = () => ({
  type: HEADER_TYPES.POST_HEADER_BEGIN,
});

export const postHeaderSuccess = (data) => ({
  type: HEADER_TYPES.POST_HEADER_SUCCESS,
  payload: data,
});

export const postHeaderFailure = (error) => ({
  type: HEADER_TYPES.POST_HEADER_FAILURE,
  payload: error,
});
export const updateHeaderBegin = () => ({
  type: HEADER_TYPES.UPDATE_HEADER_BEGIN,
});

export const updateHeaderSuccess = (data) => ({
  type: HEADER_TYPES.UPDATE_HEADER_SUCCESS,
  payload: data,
});

export const updateHeaderFailure = (error) => ({
  type: HEADER_TYPES.UPDATE_HEADER_FAILURE,
  payload: error,
});
export const deleteHeaderBegin = () => ({
  type: HEADER_TYPES.DELETE_HEADER_BEGIN,
});

export const deleteHeaderSuccess = (data) => ({
  type: HEADER_TYPES.DELETE_HEADER_SUCCESS,
  payload: data,
});

export const deleteHeaderFailure = (error) => ({
  type: HEADER_TYPES.DELETE_HEADER_FAILURE,
  payload: error,
});
