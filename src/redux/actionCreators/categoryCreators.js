import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteCategoryBegin,
  deleteCategoryFailure,
  deleteCategorySuccess,
  getCategoryListBegin,
  getCategoryListFailure,
  getCategoryListSuccess,
  postCategoryBegin,
  postCategoryFailure,
  postCategorySuccess,
  updateCategoryBegin,
  updateCategoryFailure,
  updateCategorySuccess,
} from "../actions/categoryActions";

export function performGetCategoryList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCategoryListBegin());
    try {
      const result = await axios.get(`${BASE_URL}category`);
      dispatch(getCategoryListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Category Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCategoryListFailure());
      return false;
    }
  };
}

export function performPostCategory(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCategoryBegin());
    try {
      const result = await axios.post(`${BASE_URL}Category`, data);
      dispatch(postCategorySuccess(result.data));
      dispatch(
        showSnack({
          message: "Category Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCategoryFailure());
      return false;
    }
  };
}

export function performUpdateCategory(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCategoryBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}category/${id}`, data);
      dispatch(updateCategorySuccess(result.data));
      dispatch(
        showSnack({
          message: "Category Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateCategoryFailure());
      return false;
    }
  };
}

export function performDeleteCategory(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteCategoryBegin());
    try {
      await axios.delete(`${BASE_URL}category/${id}`);
      dispatch(deleteCategorySuccess());
      dispatch(
        showSnack({
          message: "Category Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteCategoryFailure());
      return false;
    }
  };
}
