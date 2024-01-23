import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  getEventConferenceListBegin,
  getEventConferenceListFailure,
  getEventConferenceListSuccess,
  postEventConferenceBegin,
  postEventConferenceFailure,
  postEventConferenceImageBegin,
  postEventConferenceImageFailure,
  postEventConferenceImageSuccess,
  postEventConferenceSuccess,
  updateEventConferenceBegin,
  updateEventConferenceFailure,
  updateEventConferenceSuccess,
} from "../actions/eventConferenceActions";

export function performGetEventConferenceList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getEventConferenceListBegin());
    try {
      const result = await axios.get(`${BASE_URL}eventConference`);
      dispatch(getEventConferenceListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Event Conference Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getEventConferenceListFailure());
      return false;
    }
  };
}

export function performGetEventConferenceById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getEventConferenceListBegin());
    try {
      const result = await axios.get(`${BASE_URL}eventConference/${data}`);
      dispatch(getEventConferenceListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Event Conference Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getEventConferenceListFailure());
      return false;
    }
  };
}

export function performImagePostEventConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postEventConferenceImageBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}eventConference/uploads`,
        data
      );
      dispatch(postEventConferenceImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Event Conference Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postEventConferenceImageFailure());
      return false;
    }
  };
}

export function performPostEventConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postEventConferenceBegin());
    try {
      const result = await axios.post(`${BASE_URL}eventConference`, data);
      dispatch(postEventConferenceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Event Conference Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postEventConferenceFailure());
      return false;
    }
  };
}

export function performUpdateEventConference(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateEventConferenceBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}eventConference/${id}`, data);
      dispatch(updateEventConferenceSuccess(result.data));
      dispatch(
        showSnack({
          message: "Event Conference Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateEventConferenceFailure());
      return false;
    }
  };
}

export function performDeleteEventConference(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateEventConferenceBegin());
    try {
      await axios.delete(`${BASE_URL}eventConference/${id}`);
      dispatch(updateEventConferenceSuccess());
      dispatch(
        showSnack({
          message: "Event Conference Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateEventConferenceFailure());
      return false;
    }
  };
}
