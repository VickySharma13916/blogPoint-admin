import {
  getWhitepaperListBegin,
  getWhitepaperListSuccess,
  getWhitepaperListFailure,
  postWhitepaperBegin,
  postWhitepaperSuccess,
  postWhitepaperFailure,
  postWhitepaperImageBegin,
  postWhitepaperImageFailure,
  postWhitepaperImageSuccess,
  updateWhitepaperBegin,
  updateWhitepaperSuccess,
  updateWhitepaperFailure,
} from "../actions/whitepaperActons";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetWhitepaperList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getWhitepaperListBegin());
    try {
      const result = await axios.get(`${BASE_URL}whitepapers`);
      dispatch(getWhitepaperListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Whitepapers Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getWhitepaperListFailure());
      return false;
    }
  };
}
export function performImagePostWhitepaper(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postWhitepaperImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}whitepapers/uploads`, data);
      dispatch(postWhitepaperImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Whitepaper Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postWhitepaperImageFailure());
      return false;
    }
  };
}
export function performPostWhitepaperFile(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postWhitepaperImageBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}whitepapers/uploadFile`,
        data
      );
      dispatch(postWhitepaperImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Whitepaper File Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postWhitepaperImageFailure());
      return false;
    }
  };
}

export function performPostWhitepaper(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postWhitepaperBegin());
    try {
      const result = await axios.post(`${BASE_URL}whitepapers`, data);
      dispatch(postWhitepaperSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Whitepaper Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postWhitepaperFailure());
      return false;
    }
  };
}

export function performUpdateWhitepaper(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateWhitepaperBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}whitepapers/${id}`, data);
      dispatch(updateWhitepaperSuccess(result.data));
      dispatch(
        showSnack({
          message: "Whitepaper Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateWhitepaperFailure());
      return false;
    }
  };
}

export function performDeleteWhitepaper(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateWhitepaperBegin());
    try {
      await axios.delete(`${BASE_URL}whitepapers/${id}`);
      dispatch(updateWhitepaperSuccess());
      dispatch(
        showSnack({
          message: "Whitepaper Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateWhitepaperFailure());
      return false;
    }
  };
}

export function performDeleteWhitepaperUserdetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateWhitepaperBegin());
    try {
      const carrerid = data.carrerid;
      const userId = data.userId;
      await axios.delete(
        `${BASE_URL}whitepapers/${carrerid}/userdetails/${userId}`
      );
      dispatch(updateWhitepaperSuccess());
      dispatch(
        showSnack({
          message: "User Detail whitepapers Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateWhitepaperFailure());
      return false;
    }
  };
}
