import MEDIA_TYPES from "../types/mediaTypes";

export const resetState = () => ({
  type: MEDIA_TYPES.RESET_STATE,
});

export const getMediaBegin = () => ({
  type: MEDIA_TYPES.GET_MEDIA_BEGIN,
});

export const getMediaSuccess = (data) => ({
  type: MEDIA_TYPES.GET_MEDIA_SUCCESS,
  payload: data,
});

export const getMediaFailure = (error) => ({
  type: MEDIA_TYPES.GET_MEDIA_FAILURE,
  payload: error,
});

export const postMediaBegin = () => ({
  type: MEDIA_TYPES.POST_MEDIA_BEGIN,
});

export const postMediaSuccess = (data) => ({
  type: MEDIA_TYPES.POST_MEDIA_SUCCESS,
  payload: data,
});

export const postMediaFailure = (error) => ({
  type: MEDIA_TYPES.POST_MEDIA_FAILURE,
  payload: error,
});
export const deleteMediaBegin = () => ({
  type: MEDIA_TYPES.DELETE_MEDIA_BEGIN,
});

export const deleteMediaSuccess = (data) => ({
  type: MEDIA_TYPES.DELETE_MEDIA_SUCCESS,
  payload: data,
});

export const deleteMediaFailure = (error) => ({
  type: MEDIA_TYPES.DELETE_MEDIA_FAILURE,
  payload: error,
});
