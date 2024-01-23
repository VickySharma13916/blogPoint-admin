import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import {
  deleteFooterListBegin,
  deleteFooterListFailure,
  deleteFooterListSuccess,
  getFooterListBegin,
  getFooterListFailure,
  getFooterListSuccess,
  postFooterListBegin,
  postFooterListFailure,
  postFooterListSuccess,
  updateFooterListBegin,
  updateFooterListFailure,
  updateFooterListSuccess,
} from "../actions/footerActions";

export function performGetFooterList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getFooterListBegin());
    try {
      const result = await axios.get(`${BASE_URL}footer`);
      dispatch(getFooterListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Footer Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getFooterListFailure());
      return false;
    }
  };
}

export function performPostFooter(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postFooterListBegin());
    try {
      const result = await axios.post(`${BASE_URL}footer`, data);
      dispatch(postFooterListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Footer Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postFooterListFailure());
      return false;
    }
  };
}

export function performUpdateFooter(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateFooterListBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}footer/${id}`, data);
      dispatch(updateFooterListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Footer Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateFooterListFailure());
      return false;
    }
  };
}

export function performDeleteFooter(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteFooterListBegin());
    try {
      await axios.delete(`${BASE_URL}footer/${id}`);
      dispatch(deleteFooterListSuccess());
      dispatch(
        showSnack({
          message: "Footer Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteFooterListFailure());
      return false;
    }
  };
}
