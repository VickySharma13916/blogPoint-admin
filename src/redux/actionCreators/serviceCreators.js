import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteServiceBegin,
  deleteServiceFailure,
  deleteServiceSuccess,
  getServiceBegin,
  getServiceFailure,
  getServiceSuccess,
  postServiceBegin,
  postServiceFailure,
  postServiceSuccess,
  updateServiceBegin,
  updateServiceFailure,
  updateServiceSuccess,
} from "../actions/serviceActions";

export function performGetService() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getServiceBegin());
    try {
      const result = await axios.get(`${BASE_URL}service`);
      dispatch(getServiceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Service Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getServiceFailure());
      return false;
    }
  };
}

export function performPostService(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postServiceBegin());
    try {
      const result = await axios.post(`${BASE_URL}service`, data);
      dispatch(postServiceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Service Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postServiceFailure());
      return false;
    }
  };
}

export function performUpdateService(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateServiceBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}service/${id}`, data);
      dispatch(updateServiceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Service Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateServiceFailure());
      return false;
    }
  };
}

export function performDeleteService(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteServiceBegin());
    try {
      await axios.delete(`${BASE_URL}service/${id}`);
      dispatch(deleteServiceSuccess());
      dispatch(
        showSnack({
          message: "Service Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteServiceFailure());
      return false;
    }
  };
}
