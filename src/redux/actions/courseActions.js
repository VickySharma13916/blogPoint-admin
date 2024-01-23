import COURSE_TYPES from "../types/courseTypes";

export const resetState = () => ({
  type: COURSE_TYPES.RESET_STATE,
});

export const getCourseListBegin = () => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_BEGIN,
});

export const getCourseListSuccess = (data) => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_SUCCESS,
  payload: data,
});

export const getCourseListFailure = (error) => ({
  type: COURSE_TYPES.GET_ALL_COURSE_LIST_FAILURE,
  payload: error,
});

export const PostImageCourseListBegin = () => ({
  type: COURSE_TYPES.POST_IMAGE_COURSE_LIST_BEGIN,
});

export const PostImageCourseListSuccess = (data) => ({
  type: COURSE_TYPES.POST_IMAGE_COURSE_LIST_SUCCESS,
  payload: data,
});

export const PostImageCourseListFailure = (error) => ({
  type: COURSE_TYPES.POST_IMAGE_COURSE_LIST_FAILURE,
  payload: error,
});

export const DeleteCourseListBegin = () => ({
  type: COURSE_TYPES.DELETE_COURSE_LIST_BEGIN,
});

export const DeleteCourseListSuccess = (data) => ({
  type: COURSE_TYPES.DELETE_COURSE_LIST_SUCCESS,
  payload: data,
});

export const DeleteCourseListFailure = (error) => ({
  type: COURSE_TYPES.DELETE_COURSE_LIST_FAILURE,
  payload: error,
});

export const UpdateCourseListBegin = () => ({
  type: COURSE_TYPES.UPDATE_COURSE_LIST_BEGIN,
});

export const UpdateCourseListSuccess = (data) => ({
  type: COURSE_TYPES.UPDATE_COURSE_LIST_SUCCESS,
  payload: data,
});

export const UpdateCourseListFailure = (error) => ({
  type: COURSE_TYPES.UPDATE_COURSE_LIST_FAILURE,
  payload: error,
});
