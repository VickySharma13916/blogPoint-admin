import {
  getCarrerListBegin,
  getCarrerListFailure,
  getCarrerListSuccess,
  postCarrerBegin,
  postCarrerFailure,
  postCarrerImageBegin,
  postCarrerImageFailure,
  postCarrerImageSuccess,
  postCarrerSuccess,
  updateCarrerBegin,
  updateCarrerFailure,
  updateCarrerSuccess,
} from "../actions/carrerActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetCarrerList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCarrerListBegin());
    try {
      const result = await axios.get(`${BASE_URL}carrer`);
      dispatch(getCarrerListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Carrer Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCarrerListFailure());
      return false;
    }
  };
}
export function performGetCarrerById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCarrerListBegin());
    try {
      const result = await axios.get(`${BASE_URL}carrer/${data}`);
      dispatch(getCarrerListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Carrer Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCarrerListFailure());
      return false;
    }
  };
}
export function performImagePostCarrer(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCarrerImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}carrer/uploads`, data);
      dispatch(postCarrerImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Carrer File Upload Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCarrerImageFailure());
      return false;
    }
  };
}

export function performPostCarrer(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCarrerBegin());
    try {
      const result = await axios.post(`${BASE_URL}carrer`, data);
      dispatch(postCarrerSuccess(result.data));
      dispatch(
        showSnack({
          message: "Carrer Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCarrerFailure());
      return false;
    }
  };
}

export function performUpdateCarrer(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCarrerBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}carrer/${id}`, data);
      dispatch(updateCarrerSuccess(result.data));
      dispatch(
        showSnack({
          message: "carrer Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateCarrerFailure());
      return false;
    }
  };
}

export function performDeleteCarrer(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCarrerBegin());
    try {
      await axios.delete(`${BASE_URL}carrer/${id}`);
      dispatch(updateCarrerSuccess());
      dispatch(
        showSnack({
          message: "Carrer Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateCarrerFailure());
      return false;
    }
  };
}
export function performDeleteCarrerUserdetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCarrerBegin());
    try {
      const carrerid = data.carrerid;
      const userId = data.userId;
      await axios.delete(`${BASE_URL}carrer/${carrerid}/userdetails/${userId}`);
      dispatch(updateCarrerSuccess());
      dispatch(
        showSnack({
          message: "User Detail Carrer Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateCarrerFailure());
      return false;
    }
  };
}
