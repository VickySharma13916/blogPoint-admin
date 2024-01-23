import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteDynamicRegisterFormBegin,
  deleteDynamicRegisterFormFailure,
  deleteDynamicRegisterFormSuccess,
  getDynamicRegisterFormBegin,
  getDynamicRegisterFormFailure,
  getDynamicRegisterFormSuccess,
} from "../actions/dynamicRegisterActions";

export function performGetDynamicRegisterForm() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getDynamicRegisterFormBegin());
    try {
      const result = await axios.get(`${BASE_URL}dynamicRegisterForm`);
      dispatch(getDynamicRegisterFormSuccess(result.data));
      dispatch(
        showSnack({
          message: "Dynamic Register Form Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getDynamicRegisterFormFailure());
      return false;
    }
  };
}

export function performDeleteDynamicRegisterForm(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteDynamicRegisterFormBegin());
    try {
      await axios.delete(`${BASE_URL}dynamicRegisterForm/${id}`);
      dispatch(deleteDynamicRegisterFormSuccess());
      dispatch(
        showSnack({
          message: "Dynamic Register Form Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteDynamicRegisterFormFailure());
      return false;
    }
  };
}
