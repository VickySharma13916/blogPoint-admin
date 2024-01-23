import WEBINAR_TYPES from "../types/webinarTypes";

export const resetState = () => ({
  type: WEBINAR_TYPES.RESET_STATE,
});

export const getWebinarListBegin = () => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_BEGIN,
});

export const getWebinarListSuccess = (data) => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_SUCCESS,
  payload: data,
});

export const getWebinarListFailure = (error) => ({
  type: WEBINAR_TYPES.GET_ALL_WEBINAR_LIST_FAILURE,
  payload: error,
});

export const PostImageWebinarListBegin = () => ({
  type: WEBINAR_TYPES.POST_IMAGE_WEBINAR_LIST_BEGIN,
});

export const PostImageWebinarListSuccess = (data) => ({
  type: WEBINAR_TYPES.POST_IMAGE_WEBINAR_LIST_SUCCESS,
  payload: data,
});

export const PostImageWebinarListFailure = (error) => ({
  type: WEBINAR_TYPES.POST_IMAGE_WEBINAR_LIST_FAILURE,
  payload: error,
});

export const DeleteWebinarListBegin = () => ({
  type: WEBINAR_TYPES.DELETE_WEBINAR_LIST_BEGIN,
});

export const DeleteWebinarListSuccess = (data) => ({
  type: WEBINAR_TYPES.DELETE_WEBINAR_LIST_SUCCESS,
  payload: data,
});

export const DeleteWebinarListFailure = (error) => ({
  type: WEBINAR_TYPES.DELETE_WEBINAR_LIST_FAILURE,
  payload: error,
});

export const UpdateWebinarListBegin = () => ({
  type: WEBINAR_TYPES.UPDATE_WEBINAR_LIST_BEGIN,
});

export const UpdateWebinarListSuccess = (data) => ({
  type: WEBINAR_TYPES.UPDATE_WEBINAR_LIST_SUCCESS,
  payload: data,
});

export const UpdateWebinarListFailure = (error) => ({
  type: WEBINAR_TYPES.UPDATE_WEBINAR_LIST_FAILURE,
  payload: error,
});
