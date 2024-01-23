import {
  getNewsletterListBegin,
  getNewsletterListFailure,
  getNewsletterListSuccess,
  postNewsletterBegin,
  postNewsletterFailure,
  postNewsletterImageBegin,
  postNewsletterImageFailure,
  postNewsletterImageSuccess,
  postNewsletterSuccess,
  updateNewsletterBegin,
  updateNewsletterFailure,
  updateNewsletterSuccess,
} from "../actions/newsletterActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetNewsletterList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getNewsletterListBegin());
    try {
      const result = await axios.get(`${BASE_URL}newsletter`);
      dispatch(getNewsletterListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Newsletter Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getNewsletterListFailure());
      return false;
    }
  };
}
export function performImagePostNewsletter(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postNewsletterImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}newsletter/uploads`, data);
      dispatch(postNewsletterImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Newsletter Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postNewsletterImageFailure());
      return false;
    }
  };
}

export function performPostNewsletterFile(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postNewsletterImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}newsletter/uploadFile`, data);
      dispatch(postNewsletterImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Newsletter File Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postNewsletterImageFailure());
      return false;
    }
  };
}

export function performPostNewsletter(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postNewsletterBegin());
    try {
      const result = await axios.post(`${BASE_URL}newsletter`, data);
      dispatch(postNewsletterSuccess(result.data));
      dispatch(
        showSnack({
          message: "Newsletter Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postNewsletterFailure());
      return false;
    }
  };
}

export function performUpdateNewsletter(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateNewsletterBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}newsletter/${id}`, data);
      dispatch(updateNewsletterSuccess(result.data));
      dispatch(
        showSnack({
          message: "Newsletter Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateNewsletterFailure());
      return false;
    }
  };
}

export function performDeleteNewsletter(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateNewsletterBegin());
    try {
      await axios.delete(`${BASE_URL}newsletter/${id}`);
      dispatch(updateNewsletterSuccess());
      dispatch(
        showSnack({
          message: "Newsletter Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateNewsletterFailure());
      return false;
    }
  };
}

export function performDeleteNewsLetterUserdetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateNewsletterBegin());
    try {
      const carrerid = data.carrerid;
      const userId = data.userId;
      await axios.delete(
        `${BASE_URL}newsletter/${carrerid}/userdetails/${userId}`
      );
      dispatch(updateNewsletterSuccess());
      dispatch(
        showSnack({
          message: "User Detail Newsletter Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateNewsletterFailure());
      return false;
    }
  };
}
