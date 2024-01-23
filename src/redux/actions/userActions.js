import USER_TYPES from "../types/userTypes";

export const resetState = () => ({
  type: USER_TYPES.RESET_STATE,
});

export const getListBegin = () => ({
  type: USER_TYPES.GET_USER_LIST_BEGIN,
});

export const getListSuccess = (data) => ({
  type: USER_TYPES.GET_USER_LIST_SUCCESS,
  payload: data,
});

export const getListFailure = (error) => ({
  type: USER_TYPES.GET_USER_LIST_FAILURE,
  payload: error,
});

export const getAdminListBegin = () => ({
  type: USER_TYPES.GET_ADMIN_LIST_BEGIN,
});

export const getAdminListSuccess = (data) => ({
  type: USER_TYPES.GET_ADMIN_LIST_SUCCESS,
  payload: data,
});

export const getAdminListFailure = (error) => ({
  type: USER_TYPES.GET_ADMIN_LIST_FAILURE,
  payload: error,
});

export const getUserDetailsByIdBegin = () => ({
  type: USER_TYPES.GET_USER_DETAILS_BEGIN,
});

export const getUserDetailsByIdSuccess = (data) => ({
  type: USER_TYPES.GET_USER_DETAILS_SUCCESS,
  payload: data,
});

export const getUserDetailsByIdFailure = (error) => ({
  type: USER_TYPES.GET_USER_DETAILS_FAILURE,
  payload: error,
});

export const updateUserBegin = () => ({
  type: USER_TYPES.UPDATE_USER_BEGIN,
});

export const updateUserSuccess = () => ({
  type: USER_TYPES.UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: USER_TYPES.UPDATE_USER_FAILURE,
  payload: error,
});

export const createUserBegin = () => ({
  type: USER_TYPES.CREATE_USER_BEGIN,
});

export const createUserSuccess = () => ({
  type: USER_TYPES.CREATE_USER_SUCCESS,
});

export const createUserFailure = (error) => ({
  type: USER_TYPES.CREATE_USER_FAILURE,
  payload: error,
});

export const deleteUserBegin = () => ({
  type: USER_TYPES.DELETE_USER_BEGIN,
});

export const deleteUserSuccess = () => ({
  type: USER_TYPES.DELETE_USER_SUCCESS,
});

export const deleteUserFailure = (error) => ({
  type: USER_TYPES.DELETE_USER_FAILURE,
  payload: error,
});
