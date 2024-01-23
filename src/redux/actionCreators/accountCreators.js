import {
  updatePasswordBegin,
  updatePasswordFailure,
  updatePasswordSuccess,
  updateProfileBegin,
  updateProfileFailure,
  updateProfileSuccess,
} from "../actions/accountActions";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  postAdminProfileDetailsBegin,
  postAdminProfileDetailsFailure,
  postAdminProfileDetailsSuccess,
  updateUserData,
} from "../actions/authActions";

import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performUpdateProfile(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateProfileBegin());
    try {
      const id = data?.id;
      const result = await axios.put(`${BASE_URL}admin/${id}`, data);
      dispatch(updateUserData(result.data.user));
      dispatch(updateProfileSuccess());
      dispatch(
        showSnack({
          message: "Admin Data Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateProfileFailure());
      return false;
    }
  };
}
export function performUpdateAdminProfile(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postAdminProfileDetailsBegin());
    try {
      const id = data?.id;
      await axios.put(`${BASE_URL}admin/${id}`, data);
      dispatch(postAdminProfileDetailsSuccess());
      dispatch(
        showSnack({
          message: "Admin Data Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(postAdminProfileDetailsFailure());
      return false;
    }
  };
}

export function performUpdatePassword(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updatePasswordBegin());
    try {
      const result = await axios.put(`${BASE_URL}admin/change-password`, data);
      dispatch(updatePasswordSuccess(result.data));
      dispatch(
        showSnack({
          message: "Password Update Successfully",
          options: {
            variant: "success",
          },
        })
      );

      return true;
    } catch (error) {
      dispatch(updatePasswordFailure());
      return false;
    }
  };
}
