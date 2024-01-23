import {
  getBlogListBegin,
  getBlogListSuccess,
  getBlogListFailure,
  postBlogBegin,
  postBlogSuccess,
  postBlogFailure,
  postBlogImageBegin,
  postBlogImageFailure,
  postBlogImageSuccess,
  updateBlogBegin,
  updateBlogSuccess,
  updateBlogFailure,
} from "../actions/blogActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetBlogList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getBlogListBegin());
    try {
      const result = await axios.get(`${BASE_URL}blogs`);
      dispatch(getBlogListSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Blog Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getBlogListFailure());
      return false;
    }
  };
}
export function performImagePostBlog(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postBlogImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}blogs/uploads`, data);
      dispatch(postBlogImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Blog Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postBlogImageFailure());
      return false;
    }
  };
}

export function performPostBlog(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postBlogBegin());
    try {
      const result = await axios.post(`${BASE_URL}blogs`, data);
      dispatch(postBlogSuccess(result.data));
      dispatch(
        showSnack({
          message: "Blog Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postBlogFailure());
      return false;
    }
  };
}

export function performUpdateBlog(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateBlogBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}blogs/${id}`, data);
      dispatch(updateBlogSuccess(result.data));
      dispatch(
        showSnack({
          message: "Blog Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateBlogFailure());
      return false;
    }
  };
}

export function performDeleteBlog(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateBlogBegin());
    try {
      await axios.delete(`${BASE_URL}blogs/${id}`);
      dispatch(updateBlogSuccess());
      dispatch(
        showSnack({
          message: "Blog Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateBlogFailure());
      return false;
    }
  };
}
