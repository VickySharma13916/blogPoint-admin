import HOMEPAGE_TYPES from "../types/homepageTypes";

export const resetState = () => ({
  type: HOMEPAGE_TYPES.RESET_STATE,
});

export const getHomepageListBegin = () => ({
  type: HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_BEGIN,
});

export const getHomepageListSuccess = (data) => ({
  type: HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_SUCCESS,
  payload: data,
});

export const getHomepageListFailure = (error) => ({
  type: HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_FAILURE,
  payload: error,
});

export const postHomepageBegin = () => ({
  type: HOMEPAGE_TYPES.POST_HOMEPAGE_BEGIN,
});

export const postHomepageSuccess = (data) => ({
  type: HOMEPAGE_TYPES.POST_HOMEPAGE_SUCCESS,
  payload: data,
});

export const postHomepageFailure = (error) => ({
  type: HOMEPAGE_TYPES.POST_HOMEPAGE_FAILURE,
  payload: error,
});
export const updateHomepageBegin = () => ({
  type: HOMEPAGE_TYPES.UPDATE_HOMEPAGE_BEGIN,
});

export const updateHomepageSuccess = (data) => ({
  type: HOMEPAGE_TYPES.UPDATE_HOMEPAGE_SUCCESS,
  payload: data,
});

export const updateHomepageFailure = (error) => ({
  type: HOMEPAGE_TYPES.UPDATE_HOMEPAGE_FAILURE,
  payload: error,
});

export const postHomepageImageBegin = () => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_BEGIN,
});

export const postHomepageImageSuccess = (data) => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_SUCCESS,
  payload: data,
});

export const postHomepageImageFailure = (error) => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_FAILURE,
  payload: error,
});

export const deleteHomepageBegin = () => ({
  type: HOMEPAGE_TYPES.DELETE_HOMEPAGE_BEGIN,
});

export const deleteHomepageSuccess = (data) => ({
  type: HOMEPAGE_TYPES.DELETE_HOMEPAGE_SUCCESS,
  payload: data,
});

export const deleteHomepageFailure = (error) => ({
  type: HOMEPAGE_TYPES.DELETE_HOMEPAGE_FAILURE,
  payload: error,
});

export const getClientListBegin = () => ({
  type: HOMEPAGE_TYPES.GET_CLIENT_LIST_BEGIN,
});

export const getClientListSuccess = (data) => ({
  type: HOMEPAGE_TYPES.GET_CLIENT_LIST_SUCCESS,
  payload: data,
});

export const getClientListFailure = (error) => ({
  type: HOMEPAGE_TYPES.GET_CLIENT_LIST_FAILURE,
  payload: error,
});

// Actions for posting client
export const postClientBegin = () => ({
  type: HOMEPAGE_TYPES.POST_CLIENT_BEGIN,
});

export const postClientSuccess = (data) => ({
  type: HOMEPAGE_TYPES.POST_CLIENT_SUCCESS,
  payload: data,
});

export const postClientFailure = (error) => ({
  type: HOMEPAGE_TYPES.POST_CLIENT_FAILURE,
  payload: error,
});
export const postClientImageBegin = () => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_CLIENT_BEGIN,
});

export const postClientImageSuccess = (data) => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_CLIENT_SUCCESS,
  payload: data,
});

export const postClientImageFailure = (error) => ({
  type: HOMEPAGE_TYPES.POST_IMAGE_CLIENT_FAILURE,
  payload: error,
});

// Actions for updating client
export const updateClientBegin = () => ({
  type: HOMEPAGE_TYPES.UPDATE_CLIENT_BEGIN,
});

export const updateClientSuccess = (data) => ({
  type: HOMEPAGE_TYPES.UPDATE_CLIENT_SUCCESS,
  payload: data,
});

export const updateClientFailure = (error) => ({
  type: HOMEPAGE_TYPES.UPDATE_CLIENT_FAILURE,
  payload: error,
});

// Actions for deleting client
export const deleteClientBegin = () => ({
  type: HOMEPAGE_TYPES.DELETE_CLIENT_BEGIN,
});

export const deleteClientSuccess = (data) => ({
  type: HOMEPAGE_TYPES.DELETE_CLIENT_SUCCESS,
  payload: data,
});

export const deleteClientFailure = (error) => ({
  type: HOMEPAGE_TYPES.DELETE_CLIENT_FAILURE,
  payload: error,
});
