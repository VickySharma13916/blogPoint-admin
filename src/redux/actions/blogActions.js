import BLOG_TYPES from "../types/blogTypes";

export const resetState = () => ({
  type: BLOG_TYPES.RESET_STATE,
});

export const getBlogListBegin = () => ({
  type: BLOG_TYPES.GET_LIST_BEGIN,
});

export const getBlogListSuccess = (data) => ({
  type: BLOG_TYPES.GET_LIST_SUCCESS,
  payload: data,
});

export const getBlogListFailure = (error) => ({
  type: BLOG_TYPES.GET_LIST_FAILURE,
  payload: error,
});

export const postBlogBegin = () => ({
  type: BLOG_TYPES.POST_BLOG_BEGIN,
});

export const postBlogSuccess = (data) => ({
  type: BLOG_TYPES.POST_BLOG_SUCCESS,
  payload: data,
});

export const postBlogFailure = (error) => ({
  type: BLOG_TYPES.POST_BLOG_FAILURE,
  payload: error,
});
export const updateBlogBegin = () => ({
  type: BLOG_TYPES.UPDATE_BLOG_BEGIN,
});

export const updateBlogSuccess = (data) => ({
  type: BLOG_TYPES.UPDATE_BLOG_SUCCESS,
  payload: data,
});

export const updateBlogFailure = (error) => ({
  type: BLOG_TYPES.UPDATE_BLOG_FAILURE,
  payload: error,
});

export const postBlogImageBegin = () => ({
  type: BLOG_TYPES.POST_IMAGE_BLOG_BEGIN,
});

export const postBlogImageSuccess = (data) => ({
  type: BLOG_TYPES.POST_IMAGE_BLOG_SUCCESS,
  payload: data,
});

export const postBlogImageFailure = (error) => ({
  type: BLOG_TYPES.POST_IMAGE_BLOG_FAILURE,
  payload: error,
});
