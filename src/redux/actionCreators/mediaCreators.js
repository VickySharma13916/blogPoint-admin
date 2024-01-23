import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteMediaBegin,
  deleteMediaFailure,
  deleteMediaSuccess,
  getMediaBegin,
  getMediaFailure,
  getMediaSuccess,
  postMediaBegin,
  postMediaFailure,
  postMediaSuccess,
} from "../actions/mediaActions";

export function performGetMediaList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getMediaBegin());
    try {
      const result = await axios.get(`${BASE_URL}media`);
      dispatch(getMediaSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Media Files Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getMediaFailure());
      return false;
    }
  };
}

export function performAddMediaImage(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postMediaBegin());
    try {
      const result = await axios.post(`${BASE_URL}media`, data);
      dispatch(postMediaSuccess(result.data));
      dispatch(
        showSnack({
          message: "Media Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postMediaFailure());
      return false;
    }
  };
}

export function performDeleteMedia(file) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteMediaBegin());
    try {
      const result = await axios.delete(`${BASE_URL}media/${file}`);
      dispatch(deleteMediaSuccess());
      dispatch(
        showSnack({
          message: "Media File Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(deleteMediaFailure());
      return false;
    }
  };
}
