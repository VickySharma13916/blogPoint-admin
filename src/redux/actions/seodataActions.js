import SEO_DATA_TYPES from "../types/seodataTypes";

export const resetState = () => ({
  type: SEO_DATA_TYPES.RESET_STATE,
});

export const getSeoDataListBegin = () => ({
  type: SEO_DATA_TYPES.GET_LIST_BEGIN,
});

export const getSeoDataListSuccess = (data) => ({
  type: SEO_DATA_TYPES.GET_LIST_SUCCESS,
  payload: data,
});

export const getSeoDataListFailure = (error) => ({
  type: SEO_DATA_TYPES.GET_LIST_FAILURE,
  payload: error,
});

export const postSeoDataBegin = () => ({
  type: SEO_DATA_TYPES.POST_SEO_DATA_BEGIN,
});

export const postSeoDataSuccess = (data) => ({
  type: SEO_DATA_TYPES.POST_SEO_DATA_SUCCESS,
  payload: data,
});

export const postSeoDataFailure = (error) => ({
  type: SEO_DATA_TYPES.POST_SEO_DATA_FAILURE,
  payload: error,
});
export const updateSeoDataBegin = () => ({
  type: SEO_DATA_TYPES.UPDATE_SEO_DATA_BEGIN,
});

export const updateSeoDataSuccess = (data) => ({
  type: SEO_DATA_TYPES.UPDATE_SEO_DATA_SUCCESS,
  payload: data,
});

export const updateSeoDataFailure = (error) => ({
  type: SEO_DATA_TYPES.UPDATE_SEO_DATA_FAILURE,
  payload: error,
});
