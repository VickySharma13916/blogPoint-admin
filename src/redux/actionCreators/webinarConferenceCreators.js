import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  getWebinarConferenceListBegin,
  getWebinarConferenceListFailure,
  getWebinarConferenceListSuccess,
  postWebinarConferenceBegin,
  postWebinarConferenceFailure,
  postWebinarConferenceImageBegin,
  postWebinarConferenceImageFailure,
  postWebinarConferenceImageSuccess,
  postWebinarConferenceSuccess,
  updateWebinarConferenceBegin,
  updateWebinarConferenceFailure,
  updateWebinarConferenceSuccess,
} from "../actions/webinarConferenceActions";

export function performGetWebinarConferenceList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getWebinarConferenceListBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinarConference`);
      dispatch(getWebinarConferenceListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Webinar Conference Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getWebinarConferenceListFailure());
      return false;
    }
  };
}

export function performGetWebinarConferenceById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getWebinarConferenceListBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinarConference/${data}`);
      dispatch(getWebinarConferenceListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Webinar Conference Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getWebinarConferenceListFailure());
      return false;
    }
  };
}

export function performImagePostWebinarConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postWebinarConferenceImageBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}webinarConference/uploads`,
        data
      );
      dispatch(postWebinarConferenceImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Webinar Conference Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postWebinarConferenceImageFailure());
      return false;
    }
  };
}

export function performPostWebinarConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postWebinarConferenceBegin());
    try {
      const result = await axios.post(`${BASE_URL}webinarConference`, data);
      dispatch(postWebinarConferenceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Webinar Conference Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postWebinarConferenceFailure());
      return false;
    }
  };
}

export function performUpdateWebinarConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateWebinarConferenceBegin());
    try {
      const id = data.id;
      const result = await axios.put(
        `${BASE_URL}webinarConference/${id}`,
        data
      );
      dispatch(updateWebinarConferenceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Webinar Conference Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateWebinarConferenceFailure());
      return false;
    }
  };
}

export function performDeleteWebinarConference(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateWebinarConferenceBegin());
    try {
      await axios.delete(`${BASE_URL}webinarConference/${id}`);
      dispatch(updateWebinarConferenceSuccess());
      dispatch(
        showSnack({
          message: "Webinar Conference Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateWebinarConferenceFailure());
      return false;
    }
  };
}
