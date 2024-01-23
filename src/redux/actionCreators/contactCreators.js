import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteContactBegin,
  deleteContactFailure,
  deleteContactSuccess,
  getContactListBegin,
  getContactListFailure,
  getContactListSuccess,
} from "../actions/contactActions";

export function performGetContactList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getContactListBegin());
    try {
      const result = await axios.get(`${BASE_URL}contact`);
      dispatch(getContactListSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: result?.data?.msg,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getContactListFailure());
      return false;
    }
  };
}

export function performDeleteContact(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteContactBegin());
    try {
      await axios.delete(`${BASE_URL}contact/${id}`);
      dispatch(deleteContactSuccess());
      dispatch(
        showSnack({
          message: "Contact Information Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteContactFailure());
      return false;
    }
  };
}
