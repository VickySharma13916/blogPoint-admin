import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteInputCategoryBegin,
  deleteInputCategoryFailure,
  deleteInputCategorySuccess,
  getInputCategoryListBegin,
  getInputCategoryListFailure,
  getInputCategoryListSuccess,
  postInputCategoryBegin,
  postInputCategoryFailure,
  postInputCategorySuccess,
  updateInputCategoryBegin,
  updateInputCategoryFailure,
  updateInputCategorySuccess,
} from "../actions/inputCategoryActions";

export function performGetInputCategoryList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getInputCategoryListBegin());
    try {
      const result = await axios.get(`${BASE_URL}inputCategory`);
      dispatch(getInputCategoryListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "InputCategory Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getInputCategoryListFailure());
      return false;
    }
  };
}

export function performPostInputCategory(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postInputCategoryBegin());
    try {
      const result = await axios.post(`${BASE_URL}inputCategory`, data);
      dispatch(postInputCategorySuccess(result.data));
      dispatch(
        showSnack({
          message: "Input Category Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postInputCategoryFailure());
      return false;
    }
  };
}

export function performUpdateInputCategory(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateInputCategoryBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}inputCategory/${id}`, data);
      dispatch(updateInputCategorySuccess(result.data));
      dispatch(
        showSnack({
          message: "Input Category Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateInputCategoryFailure());
      return false;
    }
  };
}

export function performDeleteInputCategory(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteInputCategoryBegin());
    try {
      await axios.delete(`${BASE_URL}inputCategory/${id}`);
      dispatch(deleteInputCategorySuccess());
      dispatch(
        showSnack({
          message: "Input Category Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteInputCategoryFailure());
      return false;
    }
  };
}
