import PRESS_RELEASE_TYPES from "../types/pressReleaseTypes";

export const resetState = () => ({
  type: PRESS_RELEASE_TYPES.RESET_STATE,
});

export const getPressReleaseListBegin = () => ({
  type: PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_BEGIN,
});

export const getPressReleaseListSuccess = (data) => ({
  type: PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_SUCCESS,
  payload: data,
});

export const getPressReleaseListFailure = (error) => ({
  type: PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_FAILURE,
  payload: error,
});

export const getPressReleaseByIdBegin = () => ({
  type: PRESS_RELEASE_TYPES.GET_BYID_PRESS_RELEASE_BEGIN,
});

export const getPressReleaseByIdSuccess = (data) => ({
  type: PRESS_RELEASE_TYPES.GET_BYID_PRESS_RELEASE_SUCCESS,
  payload: data,
});

export const getPressReleaseByIdFailure = (error) => ({
  type: PRESS_RELEASE_TYPES.GET_BYID_PRESS_RELEASE_FAILURE,
  payload: error,
});

export const postPressReleaseBegin = () => ({
  type: PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_BEGIN,
});

export const postPressReleaseSuccess = (data) => ({
  type: PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_SUCCESS,
  payload: data,
});

export const postPressReleaseFailure = (error) => ({
  type: PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_FAILURE,
  payload: error,
});
export const updatePressReleaseBegin = () => ({
  type: PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_BEGIN,
});

export const updatePressReleaseSuccess = (data) => ({
  type: PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_SUCCESS,
  payload: data,
});

export const updatePressReleaseFailure = (error) => ({
  type: PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_FAILURE,
  payload: error,
});

export const postPressReleaseImageBegin = () => ({
  type: PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_BEGIN,
});

export const postPressReleaseImageSuccess = (data) => ({
  type: PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_SUCCESS,
  payload: data,
});

export const postPressReleaseImageFailure = (error) => ({
  type: PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_FAILURE,
  payload: error,
});
