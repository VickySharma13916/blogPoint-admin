import FOOTER_TYPES from "../types/footerTypes";

export const resetState = () => ({
  type: FOOTER_TYPES.RESET_STATE,
});

export const getFooterListBegin = () => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_BEGIN,
});

export const getFooterListSuccess = (data) => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_SUCCESS,
  payload: data,
});

export const getFooterListFailure = (error) => ({
  type: FOOTER_TYPES.GET_FOOTER_LIST_FAILURE,
  payload: error,
});
export const postFooterListBegin = () => ({
  type: FOOTER_TYPES.POST_FOOTER_LIST_BEGIN,
});

export const postFooterListSuccess = (data) => ({
  type: FOOTER_TYPES.POST_FOOTER_LIST_SUCCESS,
  payload: data,
});

export const postFooterListFailure = (error) => ({
  type: FOOTER_TYPES.POST_FOOTER_LIST_FAILURE,
  payload: error,
});
export const updateFooterListBegin = () => ({
  type: FOOTER_TYPES.UPDATE_FOOTER_LIST_BEGIN,
});

export const updateFooterListSuccess = (data) => ({
  type: FOOTER_TYPES.UPDATE_FOOTER_LIST_SUCCESS,
  payload: data,
});

export const updateFooterListFailure = (error) => ({
  type: FOOTER_TYPES.UPDATE_FOOTER_LIST_FAILURE,
  payload: error,
});
export const deleteFooterListBegin = () => ({
  type: FOOTER_TYPES.DELETE_FOOTER_LIST_BEGIN,
});

export const deleteFooterListSuccess = (data) => ({
  type: FOOTER_TYPES.DELETE_FOOTER_LIST_SUCCESS,
  payload: data,
});

export const deleteFooterListFailure = (error) => ({
  type: FOOTER_TYPES.DELETE_FOOTER_LIST_FAILURE,
  payload: error,
});
