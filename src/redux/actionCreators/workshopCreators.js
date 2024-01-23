import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  DeleteWorkshopListBegin,
  DeleteWorkshopListFailure,
  DeleteWorkshopListSuccess,
  PostWorkshopListBegin,
  PostWorkshopListFailure,
  PostWorkshopListSuccess,
  UpdateWorkshopListBegin,
  UpdateWorkshopListFailure,
  UpdateWorkshopListSuccess,
  getWorkshopListBegin,
  getWorkshopListFailure,
  getWorkshopListSuccess,
} from "../actions/workshopActions";

export function performGetWorkshopList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getWorkshopListBegin());
    try {
      const result = await axios.get(`${BASE_URL}workshop`);
      dispatch(getWorkshopListSuccess(result?.data?.docs?.data));
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
      dispatch(getWorkshopListFailure());
      return false;
    }
  };
}

export function performPostImageWorkshop(data, type) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostWorkshopListBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}workshop/upload/${type}`,
        data
      );

      dispatch(PostWorkshopListSuccess(result?.data));
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
      dispatch(PostWorkshopListFailure());
      return false;
    }
  };
}

export function performPostWorkshop(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostWorkshopListBegin());
    try {
      const result = await axios.post(`${BASE_URL}workshop`, data);
      dispatch(PostWorkshopListSuccess(result?.data));
      dispatch(
        showSnack({
          message: `Workshop Add Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(PostWorkshopListFailure());
      return false;
    }
  };
}

export function performUpdateWorkshop(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateWorkshopListBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}workshop/${id}`, data);
      dispatch(UpdateWorkshopListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Workshop Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateWorkshopListFailure());
      return false;
    }
  };
}

export function performDeleteWorkshop(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteWorkshopListBegin());
    try {
      await axios.delete(`${BASE_URL}workshop/${id}`);
      dispatch(DeleteWorkshopListSuccess());
      dispatch(
        showSnack({
          message: "Workshop Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(DeleteWorkshopListFailure());
      return false;
    }
  };
}

//Dynamic Data adding in workshop

export function performPostWorkshopDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(PostWorkshopListBegin());
    try {
      const WorkshopId = data.courseId;
      const type = data.type;
      const result = await axios.post(
        `${BASE_URL}workshop/${WorkshopId}/${type}`,
        data
      );
      dispatch(PostWorkshopListSuccess(result?.data));
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
      dispatch(PostWorkshopListFailure());
      return false;
    }
  };
}

export function performUpdateWorkshopDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(UpdateWorkshopListBegin());
    try {
      const accordionId = data.accordionId;
      const WorkshopId = data.courseId;
      const type = data.type;
      const result = await axios.put(
        `${BASE_URL}workshop/${WorkshopId}/${type}/${accordionId}`,
        data
      );
      dispatch(UpdateWorkshopListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Workshop Update Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(UpdateWorkshopListFailure());
      return false;
    }
  };
}

export function performDeleteWorkshopDetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(DeleteWorkshopListBegin());
    try {
      const accordionId = data.accordionId;
      const WorkshopId = data.courseId;
      const type = data.type;
      const result = await axios.delete(
        `${BASE_URL}workshop/${WorkshopId}/${type}/${accordionId}`,
        data
      );
      dispatch(DeleteWorkshopListSuccess(result.data));
      dispatch(
        showSnack({
          message: `${type} Workshop Delete Successfully`,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(DeleteWorkshopListFailure());
      return false;
    }
  };
}
