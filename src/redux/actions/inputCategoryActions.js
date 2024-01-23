import INPUT_CATEGORY_TYPES from "../types/inputCategoryTypes";

export const getInputCategoryListBegin = () => ({
  type: INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_BEGIN,
});

export const getInputCategoryListSuccess = (data) => ({
  type: INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_SUCCESS,
  payload: data,
});

export const getInputCategoryListFailure = (error) => ({
  type: INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_FAILURE,
  payload: error,
});
export const postInputCategoryBegin = () => ({
  type: INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_BEGIN,
});

export const postInputCategorySuccess = (data) => ({
  type: INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_SUCCESS,
  payload: data,
});

export const postInputCategoryFailure = (error) => ({
  type: INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_FAILURE,
  payload: error,
});
export const updateInputCategoryBegin = () => ({
  type: INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_BEGIN,
});

export const updateInputCategorySuccess = (data) => ({
  type: INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_SUCCESS,
  payload: data,
});

export const updateInputCategoryFailure = (error) => ({
  type: INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_FAILURE,
  payload: error,
});
export const deleteInputCategoryBegin = () => ({
  type: INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_BEGIN,
});

export const deleteInputCategorySuccess = (data) => ({
  type: INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_SUCCESS,
  payload: data,
});

export const deleteInputCategoryFailure = (error) => ({
  type: INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_FAILURE,
  payload: error,
});
