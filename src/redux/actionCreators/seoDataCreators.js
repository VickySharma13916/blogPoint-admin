import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import {
  getSeoDataListBegin,
  getSeoDataListFailure,
  getSeoDataListSuccess,
  postSeoDataBegin,
  postSeoDataFailure,
  postSeoDataSuccess,
  updateSeoDataBegin,
  updateSeoDataFailure,
  updateSeoDataSuccess,
} from "../actions/seodataActions";

export function performGetSeoDataList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getSeoDataListBegin());
    try {
      const result = await axios.get(`${BASE_URL}seodata`);
      dispatch(getSeoDataListSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "SEO Data Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getSeoDataListFailure());
      return false;
    }
  };
}

export function performAddMetaImage(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postSeoDataBegin());
    try {
      const result = await axios.post(`${BASE_URL}seodata/uploads`, data);
      dispatch(postSeoDataSuccess(result.data));
      dispatch(
        showSnack({
          message: "Meta Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postSeoDataFailure());
      return false;
    }
  };
}

export function performPostSeoData(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postSeoDataBegin());
    try {
      const result = await axios.post(`${BASE_URL}seodata`, data);
      dispatch(postSeoDataSuccess(result.data));
      dispatch(
        showSnack({
          message: "SEO Data Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postSeoDataFailure());
      return false;
    }
  };
}

export function performUpdateSeoData(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateSeoDataBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}seodata/${id}`, data);
      dispatch(updateSeoDataSuccess(result.data));
      dispatch(
        showSnack({
          message: "SEO Data Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateSeoDataFailure());
      return false;
    }
  };
}
