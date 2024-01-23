import ADMIN_TYPES from "../types/adminTypes";

export const resetState = () => ({
  type: ADMIN_TYPES.RESET_STATE,
});

export const getAdminListBegin = () => ({
  type: ADMIN_TYPES.GET_LIST_BEGIN,
});

export const getAdminListSuccess = (data) => ({
  type: ADMIN_TYPES.GET_LIST_SUCCESS,
  payload: data,
});

export const getAdminListFailure = (error) => ({
  type: ADMIN_TYPES.GET_LIST_FAILURE,
  payload: error,
});

export const postAdminBegin = () => ({
  type: ADMIN_TYPES.POST_ADMIN_BEGIN,
});

export const postAdminSuccess = (data) => ({
  type: ADMIN_TYPES.POST_ADMIN_SUCCESS,
  payload: data,
});

export const postAdminFailure = (error) => ({
  type: ADMIN_TYPES.POST_ADMIN_FAILURE,
  payload: error,
});

export const setAdminSubmitting = (data) => ({
  type: ADMIN_TYPES.ADMIN_SUBMITTING,
  payload: data,
});

export const setFilters = (data) => ({
  type: ADMIN_TYPES.SET_FILTERS,
  payload: data,
});

export const resetFilters = () => ({
  type: ADMIN_TYPES.RESET_FILTERS,
});
