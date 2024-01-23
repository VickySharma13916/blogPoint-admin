import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  getAnnouncementListBegin,
  getAnnouncementListFailure,
  getAnnouncementListSuccess,
  postAnnouncementBegin,
  postAnnouncementFailure,
  postAnnouncementImageBegin,
  postAnnouncementImageFailure,
  postAnnouncementImageSuccess,
  postAnnouncementSuccess,
  updateAnnouncementBegin,
  updateAnnouncementFailure,
  updateAnnouncementSuccess,
} from "../actions/announcementActions";

export function performGetAnnouncementList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getAnnouncementListBegin());
    try {
      const result = await axios.get(`${BASE_URL}announcement`);
      dispatch(getAnnouncementListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Announcement Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getAnnouncementListFailure());
      return false;
    }
  };
}
export function performGetAnnouncementById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getAnnouncementListBegin());
    try {
      const result = await axios.get(`${BASE_URL}announcement/${data}`);
      dispatch(getAnnouncementListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Announcement Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getAnnouncementListFailure());
      return false;
    }
  };
}
export function performImagePostAnnouncement(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postAnnouncementImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}announcement/uploads`, data);
      dispatch(postAnnouncementImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Announcement Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postAnnouncementImageFailure());
      return false;
    }
  };
}

export function performPostAnnouncement(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postAnnouncementBegin());
    try {
      const result = await axios.post(`${BASE_URL}announcement`, data);
      dispatch(postAnnouncementSuccess(result.data));
      dispatch(
        showSnack({
          message: "Announcement Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postAnnouncementFailure());
      return false;
    }
  };
}

export function performUpdateAnnouncement(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateAnnouncementBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}announcement/${id}`, data);
      dispatch(updateAnnouncementSuccess(result.data));
      dispatch(
        showSnack({
          message: "Announcement Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateAnnouncementFailure());
      return false;
    }
  };
}
export function performDeleteAnnouncement(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateAnnouncementBegin());
    try {
      await axios.delete(`${BASE_URL}announcement/${id}`);
      dispatch(updateAnnouncementSuccess());
      dispatch(
        showSnack({
          message: "Announcement Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateAnnouncementFailure());
      return false;
    }
  };
}
