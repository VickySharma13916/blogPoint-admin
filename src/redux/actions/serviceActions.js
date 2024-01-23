import SERVICE_TYPES from "../types/serviceTypes";

export const resetState = () => ({
  type: SERVICE_TYPES.RESET_STATE,
});

export const getServiceBegin = () => ({
  type: SERVICE_TYPES.GET_SERVICE_BEGIN,
});

export const getServiceSuccess = (data) => ({
  type: SERVICE_TYPES.GET_SERVICE_SUCCESS,
  payload: data,
});

export const getServiceFailure = (error) => ({
  type: SERVICE_TYPES.GET_SERVICE_FAILURE,
  payload: error,
});
export const postServiceBegin = () => ({
  type: SERVICE_TYPES.POST_SERVICE_BEGIN,
});

export const postServiceSuccess = (data) => ({
  type: SERVICE_TYPES.POST_SERVICE_SUCCESS,
  payload: data,
});

export const postServiceFailure = (error) => ({
  type: SERVICE_TYPES.POST_SERVICE_FAILURE,
  payload: error,
});
export const updateServiceBegin = () => ({
  type: SERVICE_TYPES.UPDATE_SERVICE_BEGIN,
});

export const updateServiceSuccess = (data) => ({
  type: SERVICE_TYPES.UPDATE_SERVICE_SUCCESS,
  payload: data,
});

export const updateServiceFailure = (error) => ({
  type: SERVICE_TYPES.UPDATE_SERVICE_FAILURE,
  payload: error,
});
export const deleteServiceBegin = () => ({
  type: SERVICE_TYPES.DELETE_SERVICE_BEGIN,
});

export const deleteServiceSuccess = (data) => ({
  type: SERVICE_TYPES.DELETE_SERVICE_SUCCESS,
  payload: data,
});

export const deleteServiceFailure = (error) => ({
  type: SERVICE_TYPES.DELETE_SERVICE_FAILURE,
  payload: error,
});
