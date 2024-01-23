import CATEGORY_TYPES from "../types/categoryTypes";

export const getCategoryListBegin = () => ({
  type: CATEGORY_TYPES.GET_CATEGORY_LIST_BEGIN,
});

export const getCategoryListSuccess = (data) => ({
  type: CATEGORY_TYPES.GET_CATEGORY_LIST_SUCCESS,
  payload: data,
});

export const getCategoryListFailure = (error) => ({
  type: CATEGORY_TYPES.GET_CATEGORY_LIST_FAILURE,
  payload: error,
});
export const postCategoryBegin = () => ({
  type: CATEGORY_TYPES.POST_CATEGORY_BEGIN,
});

export const postCategorySuccess = (data) => ({
  type: CATEGORY_TYPES.POST_CATEGORY_SUCCESS,
  payload: data,
});

export const postCategoryFailure = (error) => ({
  type: CATEGORY_TYPES.POST_CATEGORY_FAILURE,
  payload: error,
});
export const updateCategoryBegin = () => ({
  type: CATEGORY_TYPES.UPDATE_CATEGORY_BEGIN,
});

export const updateCategorySuccess = (data) => ({
  type: CATEGORY_TYPES.UPDATE_CATEGORY_SUCCESS,
  payload: data,
});

export const updateCategoryFailure = (error) => ({
  type: CATEGORY_TYPES.UPDATE_CATEGORY_FAILURE,
  payload: error,
});
export const deleteCategoryBegin = () => ({
  type: CATEGORY_TYPES.DELETE_CATEGORY_BEGIN,
});

export const deleteCategorySuccess = (data) => ({
  type: CATEGORY_TYPES.DELETE_CATEGORY_SUCCESS,
  payload: data,
});

export const deleteCategoryFailure = (error) => ({
  type: CATEGORY_TYPES.DELETE_CATEGORY_FAILURE,
  payload: error,
});
