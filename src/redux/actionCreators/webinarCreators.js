import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  DeleteWebinarListBegin,
  DeleteWebinarListFailure,
  DeleteWebinarListSuccess,
  PostImageWebinarListBegin,
  PostImageWebinarListFailure,
  PostImageWebinarListSuccess,
  UpdateWebinarListBegin,
  UpdateWebinarListFailure,
  UpdateWebinarListSuccess,
  getWebinarListBegin,
  getWebinarListFailure,
  getWebinarListSuccess,
} from "../actions/webinarActions";

export function performGetWebinarList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getWebinarListBegin());
    try {
      const result = await axios.get(`${BASE_URL}webinar`);
      dispatch(getWebinarListSuccess(result?.data?.docs?.data));
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
      dispatch(getWebinarListFailure());
      return false;
    }
  };
}

export function performPostImageWebinar(data, type) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageWebinarListBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}webinar/upload/${type}`,
        data
      );
      dispatch(PostImageWebinarListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `${type} Retrieved Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageWebinarListFailure());
      return false;
    }
  };
}

export function performPostWebinar(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageWebinarListBegin());
    try {
      const result = await axios.post(`${BASE_URL}webinar`, data);
      dispatch(PostImageWebinarListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `Webinar Add Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageWebinarListFailure());
      return false;
    }
  };
}

export function performUpdateWebinar(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateWebinarListBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}webinar/${id}`, data);
      dispatch(UpdateWebinarListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Webinar Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateWebinarListFailure());
      return false;
    }
  };
}

export function performDeleteWebinar(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteWebinarListBegin());
    try {
      await axios.delete(`${BASE_URL}webinar/${id}`);
      dispatch(DeleteWebinarListSuccess());
      dispatch(
        showSnack({
          message: "Webinar Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(DeleteWebinarListFailure());
      return false;
    }
  };
}

//Dynamic Data adding in webinar

export function performPostWebinarDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostImageWebinarListBegin());
    try {
      const WebinarId = data.courseId;
      const type = data.type;
      const result = await axios.post(
        `${BASE_URL}Webinar/${WebinarId}/${type}`,
        data
      );
      dispatch(PostImageWebinarListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `${type} Add Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostImageWebinarListFailure());
      return false;
    }
  };
}

export function performUpdateWebinarDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateWebinarListBegin());
    try {
      const accordionId = data.accordionId;
      const WebinarId = data.courseId;
      const type = data.type;
      const result = await axios.put(
        `${BASE_URL}webinar/${WebinarId}/${type}/${accordionId}`,
        data
      );
      dispatch(UpdateWebinarListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Webinar Update Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateWebinarListFailure());
      return false;
    }
  };
}

export function performDeleteWebinarDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteWebinarListBegin());
    try {
      const accordionId = data.accordionId;
      const WebinarId = data.courseId;
      const type = data.type;
      const result = await axios.delete(
        `${BASE_URL}Webinar/${WebinarId}/${type}/${accordionId}`,
        data
      );
      dispatch(DeleteWebinarListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Webinar Delete Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(DeleteWebinarListFailure());
      return false;
    }
  };
}
