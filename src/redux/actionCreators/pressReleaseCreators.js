import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  getPressReleaseListBegin,
  getPressReleaseListFailure,
  getPressReleaseListSuccess,
  postPressReleaseBegin,
  postPressReleaseFailure,
  postPressReleaseImageBegin,
  postPressReleaseImageFailure,
  postPressReleaseImageSuccess,
  postPressReleaseSuccess,
  updatePressReleaseBegin,
  updatePressReleaseFailure,
  updatePressReleaseSuccess,
} from "../actions/pressReleaseActions";

export function performGetPressReleaseList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getPressReleaseListBegin());
    try {
      const result = await axios.get(`${BASE_URL}pressRelease`);
      dispatch(getPressReleaseListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Press Release Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getPressReleaseListFailure());
      return false;
    }
  };
}
export function performGetPressReleaseById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getPressReleaseListBegin());
    try {
      const result = await axios.get(`${BASE_URL}pressRelease/${data}`);
      dispatch(getPressReleaseListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Press Release Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getPressReleaseListFailure());
      return false;
    }
  };
}
export function performImagePostPressRelease(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postPressReleaseImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}pressRelease/uploads`, data);
      dispatch(postPressReleaseImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Press Release Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postPressReleaseImageFailure());
      return false;
    }
  };
}

export function performPostPressRelease(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postPressReleaseBegin());
    try {
      const result = await axios.post(`${BASE_URL}pressRelease`, data);
      dispatch(postPressReleaseSuccess(result.data));
      dispatch(
        showSnack({
          message: "Press Release Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postPressReleaseFailure());
      return false;
    }
  };
}

export function performUpdatePressRelease(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updatePressReleaseBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}pressRelease/${id}`, data);
      dispatch(updatePressReleaseSuccess(result.data));
      dispatch(
        showSnack({
          message: "Press Release Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updatePressReleaseFailure());
      return false;
    }
  };
}

export function performDeletePressRelease(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updatePressReleaseBegin());
    try {
      await axios.delete(`${BASE_URL}pressRelease/${id}`);
      dispatch(updatePressReleaseSuccess());
      dispatch(
        showSnack({
          message: "Press Release Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updatePressReleaseFailure());
      return false;
    }
  };
}
