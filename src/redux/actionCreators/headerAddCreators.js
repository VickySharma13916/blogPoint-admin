import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import {
  deleteHeaderAddBegin,
  deleteHeaderAddFailure,
  deleteHeaderAddSuccess,
  getHeaderAddListBegin,
  getHeaderAddListFailure,
  getHeaderAddListSuccess,
  postHeaderAddBegin,
  postHeaderAddFailure,
  postHeaderAddSuccess,
  updateHeaderAddBegin,
  updateHeaderAddFailure,
  updateHeaderAddSuccess,
} from "../actions/headerActions";

export function performGetHeaderAddList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getHeaderAddListBegin());
    try {
      const result = await axios.get(`${BASE_URL}headerAdd`);
      dispatch(getHeaderAddListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Advertisement List Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getHeaderAddListFailure());
      return false;
    }
  };
}

export function performImagePosthHeaderAdd(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postHeaderAddBegin());
    try {
      const result = await axios.post(`${BASE_URL}headerAdd/uploads`, data);
      dispatch(postHeaderAddSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Advertisement Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postHeaderAddFailure());
      return false;
    }
  };
}

export function performPostHeaderAdd(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postHeaderAddBegin());
    try {
      const result = await axios.post(`${BASE_URL}headerAdd`, data);
      dispatch(postHeaderAddSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Advertisement Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postHeaderAddFailure());
      return false;
    }
  };
}

export function performUpdateHeaderAdd(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateHeaderAddBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}headerAdd/${id}`, data);
      dispatch(updateHeaderAddSuccess(result.data));
      dispatch(
        showSnack({
          message: "Header Advertisement Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateHeaderAddFailure());
      return false;
    }
  };
}

export function performDeleteHeaderAdd(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteHeaderAddBegin());
    try {
      await axios.delete(`${BASE_URL}headerAdd/${id}`);
      dispatch(deleteHeaderAddSuccess());
      dispatch(
        showSnack({
          message: "Header Advertisement Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteHeaderAddFailure());
      return false;
    }
  };
}
