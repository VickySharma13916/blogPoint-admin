import HEADER_ADD_TYPES from "../types/headerAddTypes";

export const resetState = () => ({
  type: HEADER_ADD_TYPES.RESET_STATE,
});

export const getHeaderAddListBegin = () => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_BEGIN,
});

export const getHeaderAddListSuccess = (data) => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_SUCCESS,
  payload: data,
});

export const getHeaderAddListFailure = (error) => ({
  type: HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_FAILURE,
  payload: error,
});
export const postHeaderAddBegin = () => ({
  type: HEADER_ADD_TYPES.POST_HEADER_ADD_BEGIN,
});

export const postHeaderAddSuccess = (data) => ({
  type: HEADER_ADD_TYPES.POST_HEADER_ADD_SUCCESS,
  payload: data,
});

export const postHeaderAddFailure = (error) => ({
  type: HEADER_ADD_TYPES.POST_HEADER_ADD_FAILURE,
  payload: error,
});
export const deleteHeaderAddBegin = () => ({
  type: HEADER_ADD_TYPES.DELETE_HEADER_ADD_BEGIN,
});

export const deleteHeaderAddSuccess = (data) => ({
  type: HEADER_ADD_TYPES.DELETE_HEADER_ADD_SUCCESS,
  payload: data,
});

export const deleteHeaderAddFailure = (error) => ({
  type: HEADER_ADD_TYPES.DELETE_HEADER_ADD_FAILURE,
  payload: error,
});
export const updateHeaderAddBegin = () => ({
  type: HEADER_ADD_TYPES.UPDATE_HEADER_ADD_BEGIN,
});

export const updateHeaderAddSuccess = (data) => ({
  type: HEADER_ADD_TYPES.UPDATE_HEADER_ADD_SUCCESS,
  payload: data,
});

export const updateHeaderAddFailure = (error) => ({
  type: HEADER_ADD_TYPES.UPDATE_HEADER_ADD_FAILURE,
  payload: error,
});
