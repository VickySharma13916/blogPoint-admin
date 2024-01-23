import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteDynamicFormBegin,
  deleteDynamicFormFailure,
  deleteDynamicFormSuccess,
  getDynamicFormBegin,
  getDynamicFormFailure,
  getDynamicFormSuccess,
  postDynamicFormBegin,
  postDynamicFormFailure,
  postDynamicFormSuccess,
  updateDynamicFormBegin,
  updateDynamicFormFailure,
  updateDynamicFormSuccess,
} from "../actions/dynamicFormActions";

export function performGetDynamicForm() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getDynamicFormBegin());
    try {
      const result = await axios.get(`${BASE_URL}inputField`);
      dispatch(getDynamicFormSuccess(result.data));
      dispatch(
        showSnack({
          message: "Dynamic Input Form Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getDynamicFormFailure());
      return false;
    }
  };
}

export function performPostDynamicForm(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postDynamicFormBegin());
    try {
      const result = await axios.post(`${BASE_URL}inputField`, data);
      dispatch(postDynamicFormSuccess(result.data));
      dispatch(
        showSnack({
          message: "Dynamic Input Form Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postDynamicFormFailure());
      return false;
    }
  };
}

export function performUpdateDynamicForm(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateDynamicFormBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}inputField/${id}`, data);
      dispatch(updateDynamicFormSuccess(result.data));
      dispatch(
        showSnack({
          message: "Dynamic Input Form Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateDynamicFormFailure());
      return false;
    }
  };
}

export function performDeleteDynamicForm(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteDynamicFormBegin());
    try {
      await axios.delete(`${BASE_URL}inputField/${id}`);
      dispatch(deleteDynamicFormSuccess());
      dispatch(
        showSnack({
          message: "Dynamic Input Form Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteDynamicFormFailure());
      return false;
    }
  };
}
