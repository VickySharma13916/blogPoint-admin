import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  createUserBegin,
  createUserFailure,
  createUserSuccess,
  deleteUserBegin,
  deleteUserFailure,
  deleteUserSuccess,
  getListBegin,
  getListFailure,
  getListSuccess,
  getUserDetailsByIdBegin,
  getUserDetailsByIdFailure,
  getUserDetailsByIdSuccess,
  updateUserBegin,
  updateUserFailure,
  updateUserSuccess
} from "../actions/userActions";

export function performGetList(params) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getListBegin());
    try {
      const result = await axios.get(`${BASE_URL}users`);
      dispatch(getListSuccess(result?.data?.users));
      dispatch(
        showSnack({
          message: result?.data?.message,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getListFailure());
      return false;
    }
  };
}

export function performGetUserDetailById(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getUserDetailsByIdBegin());
    try {
      const result = await axios.get(`${BASE_URL}users/${id}`);
      dispatch(getUserDetailsByIdSuccess(result.data));
      dispatch(
        showSnack({
          message: "User Data Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getUserDetailsByIdFailure(error));
      return false;
    }
  };
}

export function performUpdateUser(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateUserBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}users/${id}`, data);
      dispatch(updateUserSuccess(result.data));
      dispatch(
        showSnack({
          message: "User Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateUserFailure());
      return false;
    }
  };
}

export function performDeleteUser(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteUserBegin());
    try {
      await axios.delete(`${BASE_URL}users/${id}`);
      dispatch(deleteUserSuccess());
      dispatch(
        showSnack({
          message: "User Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteUserFailure());
      return false;
    }
  };
}

export function performPostUser(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(createUserBegin());
    try {
      const result = await axios.post(`${BASE_URL}users`, data);
      dispatch(createUserSuccess(result.data));
      dispatch(
        showSnack({
          message: "User Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(createUserFailure());
      return false;
    }
  };
}
