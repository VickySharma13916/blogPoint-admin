import WHITEPAPER_TYPES from "../types/whitepaperTypes";

export const resetState = () => ({
  type: WHITEPAPER_TYPES.RESET_STATE,
});

export const getWhitepaperListBegin = () => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_BEGIN,
});

export const getWhitepaperListSuccess = (data) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_SUCCESS,
  payload: data,
});

export const getWhitepaperListFailure = (error) => ({
  type: WHITEPAPER_TYPES.GET_WHITEPAPER_LIST_FAILURE,
  payload: error,
});

export const postWhitepaperBegin = () => ({
  type: WHITEPAPER_TYPES.POST_WHITEPAPER_BEGIN,
});

export const postWhitepaperSuccess = (data) => ({
  type: WHITEPAPER_TYPES.POST_WHITEPAPER_SUCCESS,
  payload: data,
});

export const postWhitepaperFailure = (error) => ({
  type: WHITEPAPER_TYPES.POST_WHITEPAPER_FAILURE,
  payload: error,
});
export const updateWhitepaperBegin = () => ({
  type: WHITEPAPER_TYPES.UPDATE_WHITEPAPER_BEGIN,
});

export const updateWhitepaperSuccess = (data) => ({
  type: WHITEPAPER_TYPES.UPDATE_WHITEPAPER_SUCCESS,
  payload: data,
});

export const updateWhitepaperFailure = (error) => ({
  type: WHITEPAPER_TYPES.UPDATE_WHITEPAPER_FAILURE,
  payload: error,
});

export const postWhitepaperImageBegin = () => ({
  type: WHITEPAPER_TYPES.POST_IMAGE_WHITEPAPER_BEGIN,
});

export const postWhitepaperImageSuccess = (data) => ({
  type: WHITEPAPER_TYPES.POST_IMAGE_WHITEPAPER_SUCCESS,
  payload: data,
});

export const postWhitepaperImageFailure = (error) => ({
  type: WHITEPAPER_TYPES.POST_IMAGE_WHITEPAPER_FAILURE,
  payload: error,
});
