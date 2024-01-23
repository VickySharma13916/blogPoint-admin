import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import {
  deleteHeaderBegin,
  deleteHeaderFailure,
  deleteHeaderSuccess,
  getHeaderBegin,
  getHeaderFailure,
  getHeaderSuccess,
  postHeaderBegin,
  postHeaderFailure,
  postHeaderSuccess,
  updateHeaderBegin,
  updateHeaderFailure,
  updateHeaderSuccess,
} from "../actions/headerLinkActions";

export function performGetHeader() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getHeaderBegin());
    try {
      const result = await axios.get(`${BASE_URL}header`);
      dispatch(getHeaderSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getHeaderFailure());
      return false;
    }
  };
}

export function performPostHeader(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postHeaderBegin());
    try {
      const result = await axios.post(`${BASE_URL}header`, data);
      dispatch(postHeaderSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postHeaderFailure());
      return false;
    }
  };
}

export function performUpdateHeader(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateHeaderBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}header/${id}`, data);
      dispatch(updateHeaderSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateHeaderFailure());
      return false;
    }
  };
}

export function performDeleteHeader(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteHeaderBegin());
    try {
      await axios.delete(`${BASE_URL}header/${id}`);
      dispatch(deleteHeaderSuccess());
      dispatch(
        showSnack({
          message: "Header Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteHeaderFailure());
      return false;
    }
  };
}
