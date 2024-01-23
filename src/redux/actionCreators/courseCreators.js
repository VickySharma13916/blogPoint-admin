import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import {
  DeleteCourseListBegin,
  DeleteCourseListFailure,
  DeleteCourseListSuccess,
  PostImageCourseListBegin,
  PostImageCourseListFailure,
  PostImageCourseListSuccess,
  UpdateCourseListBegin,
  UpdateCourseListFailure,
  UpdateCourseListSuccess,
  getCourseListBegin,
  getCourseListFailure,
  getCourseListSuccess,
} from "../actions/courseActions";

export function performGetCourseList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCourseListBegin());
    try {
      const result = await axios.get(`${BASE_URL}course`);
      dispatch(getCourseListSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          // message: "Courses Retrieved Successfully",
          message: result?.data?.msg,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCourseListFailure());
      return false;
    }
  };
}

export function performPostImageCourse(data, type) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageCourseListBegin());
    try {
      const result = await axios.post(`${BASE_URL}course/upload/${type}`, data);
      dispatch(PostImageCourseListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `${type} Retrieved Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageCourseListFailure());
      return false;
    }
  };
}

export function performPostCourse(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageCourseListBegin());
    try {
      const result = await axios.post(`${BASE_URL}course`, data);
      dispatch(PostImageCourseListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `Course Add Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageCourseListFailure());
      return false;
    }
  };
}
export function performPostAccordionCourse(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageCourseListBegin());
    try {
      const courseId = data.courseId;
      const type = data.type;
      const result = await axios.post(
        `${BASE_URL}course/${courseId}/${type}`,
        data
      );
      dispatch(PostImageCourseListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `${type} Add Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageCourseListFailure());
      return false;
    }
  };
}

export function performUpdateCourse(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateCourseListBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}course/${id}`, data);
      dispatch(UpdateCourseListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Course Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateCourseListFailure());
      return false;
    }
  };
}

export function performUpdateAccordionCourse(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateCourseListBegin());
    try {
      const accordionId = data.accordionId;
      const courseId = data.courseId;
      const type = data.type;
      const result = await axios.put(
        `${BASE_URL}course/${courseId}/${type}/${accordionId}`,
        data
      );
      dispatch(UpdateCourseListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Course Update Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateCourseListFailure());
      return false;
    }
  };
}

export function performDeleteCourse(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteCourseListBegin());
    try {
      await axios.delete(`${BASE_URL}course/${id}`);
      dispatch(DeleteCourseListSuccess());
      dispatch(
        showSnack({
          message: "Course Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(DeleteCourseListFailure());
      return false;
    }
  };
}

export function performDeleteAccordionCourse(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteCourseListBegin());
    try {
      const accordionId = data.accordionId;
      const courseId = data.courseId;
      const type = data.type;
      const result = await axios.delete(
        `${BASE_URL}course/${courseId}/${type}/${accordionId}`,
        data
      );
      dispatch(DeleteCourseListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Course Delete Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(DeleteCourseListFailure());
      return false;
    }
  };
}
