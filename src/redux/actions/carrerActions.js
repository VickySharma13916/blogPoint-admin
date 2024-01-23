import CARRER_TYPES from "../types/carrerTypes";

export const resetState = () => ({
  type: CARRER_TYPES.RESET_STATE,
});

export const getCarrerListBegin = () => ({
  type: CARRER_TYPES.GET_CARRER_LIST_BEGIN,
});

export const getCarrerListSuccess = (data) => ({
  type: CARRER_TYPES.GET_CARRER_LIST_SUCCESS,
  payload: data,
});

export const getCarrerListFailure = (error) => ({
  type: CARRER_TYPES.GET_CARRER_LIST_FAILURE,
  payload: error,
});

export const getCarrerByIdBegin = () => ({
  type: CARRER_TYPES.GET_BYID_CARRER_BEGIN,
});

export const getCarrerByIdSuccess = (data) => ({
  type: CARRER_TYPES.GET_BYID_CARRER_SUCCESS,
  payload: data,
});

export const getCarrerByIdFailure = (error) => ({
  type: CARRER_TYPES.GET_BYID_CARRER_FAILURE,
  payload: error,
});

export const postCarrerBegin = () => ({
  type: CARRER_TYPES.POST_CARRER_BEGIN,
});

export const postCarrerSuccess = (data) => ({
  type: CARRER_TYPES.POST_CARRER_SUCCESS,
  payload: data,
});

export const postCarrerFailure = (error) => ({
  type: CARRER_TYPES.POST_CARRER_FAILURE,
  payload: error,
});
export const updateCarrerBegin = () => ({
  type: CARRER_TYPES.UPDATE_CARRER_BEGIN,
});

export const updateCarrerSuccess = (data) => ({
  type: CARRER_TYPES.UPDATE_CARRER_SUCCESS,
  payload: data,
});

export const updateCarrerFailure = (error) => ({
  type: CARRER_TYPES.UPDATE_CARRER_FAILURE,
  payload: error,
});

export const postCarrerImageBegin = () => ({
  type: CARRER_TYPES.POST_IMAGE_CARRER_BEGIN,
});

export const postCarrerImageSuccess = (data) => ({
  type: CARRER_TYPES.POST_IMAGE_CARRER_SUCCESS,
  payload: data,
});

export const postCarrerImageFailure = (error) => ({
  type: CARRER_TYPES.POST_IMAGE_CARRER_FAILURE,
  payload: error,
});
