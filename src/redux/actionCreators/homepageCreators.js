import {
  getHomepageListBegin,
  getHomepageListSuccess,
  getHomepageListFailure,
  postHomepageBegin,
  postHomepageSuccess,
  postHomepageFailure,
  postHomepageImageBegin,
  postHomepageImageFailure,
  postHomepageImageSuccess,
  updateHomepageBegin,
  updateHomepageSuccess,
  updateHomepageFailure,
  deleteHomepageBegin,
  deleteHomepageSuccess,
  deleteHomepageFailure,
  getClientListBegin,
  getClientListSuccess,
  getClientListFailure,
  postClientImageBegin,
  postClientImageSuccess,
  postClientImageFailure,
  postClientBegin,
  postClientSuccess,
  postClientFailure,
  updateClientBegin,
  updateClientSuccess,
  updateClientFailure,
  deleteClientBegin,
  deleteClientSuccess,
  deleteClientFailure,
} from "../actions/homepageActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetHomepageList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getHomepageListBegin());
    try {
      const result = await axios.get(`${BASE_URL}homepage`);
      dispatch(getHomepageListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Homepages Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getHomepageListFailure());
      return false;
    }
  };
}
export function performGetClientList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getClientListBegin());
    try {
      const result = await axios.get(`${BASE_URL}client`);
      dispatch(getClientListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Client data Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getClientListFailure());
      return false;
    }
  };
}
export function performImagePostHomepage(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postHomepageImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}homepage/uploads`, data);
      dispatch(postHomepageImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Homepage Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postHomepageImageFailure());
      return false;
    }
  };
}
export function performClientImagePost(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postClientImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}client/uploads`, data);
      dispatch(postClientImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Client Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postClientImageFailure());
      return false;
    }
  };
}

export function performPostHomepage(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postHomepageBegin());
    try {
      const result = await axios.post(`${BASE_URL}homepage`, data);
      dispatch(postHomepageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Homepage Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postHomepageFailure());
      return false;
    }
  };
}

export function performPostClient(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postClientBegin());
    try {
      const result = await axios.post(`   ${BASE_URL}client`, data);
      dispatch(postClientSuccess(result.data));
      dispatch(
        showSnack({
          message: "client Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postClientFailure());
      return false;
    }
  };
}

export function performUpdateHomepage(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateHomepageBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}homepage/${id}`, data);
      dispatch(updateHomepageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Homepage Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateHomepageFailure());
      return false;
    }
  };
}
export function performUpdateClient(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateClientBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}client/${id}`, data);
      dispatch(updateClientSuccess(result.data));
      dispatch(
        showSnack({
          message: "Client Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateClientFailure());
      return false;
    }
  };
}

export function performDeleteHomepage(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteHomepageBegin());
    try {
      await axios.delete(`${BASE_URL}homepage/${id}`);
      dispatch(deleteHomepageSuccess());
      dispatch(
        showSnack({
          message: "Homepage Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteHomepageFailure());
      return false;
    }
  };
}
export function performDeleteClient(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteClientBegin());
    try {
      await axios.delete(`${BASE_URL}client/${id}`);
      dispatch(deleteClientSuccess());
      dispatch(
        showSnack({
          message: "Client Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteClientFailure());
      return false;
    }
  };
}
