import {
  getCaseStudiesListBegin,
  getCaseStudiesListFailure,
  getCaseStudiesListSuccess,
  postCaseStudiesBegin,
  postCaseStudiesFailure,
  postCaseStudiesImageBegin,
  postCaseStudiesImageFailure,
  postCaseStudiesImageSuccess,
  postCaseStudiesSuccess,
  updateCaseStudiesBegin,
  updateCaseStudiesFailure,
  updateCaseStudiesSuccess,
} from "../actions/caseStudiesActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

export function performGetCaseStudiesList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCaseStudiesListBegin());
    try {
      const result = await axios.get(`${BASE_URL}caseStudies`);
      dispatch(getCaseStudiesListSuccess(result.data.docs.data));
      dispatch(
        showSnack({
          message: "Case Studies Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCaseStudiesListFailure());
      return false;
    }
  };
}
export function performGetCaseStudiesById(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getCaseStudiesListBegin());
    try {
      const result = await axios.get(`${BASE_URL}caseStudies/${data}`);
      dispatch(getCaseStudiesListSuccess(result.data));
      dispatch(
        showSnack({
          message: "Case Studies Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getCaseStudiesListFailure());
      return false;
    }
  };
}
export function performImagePostCaseStudies(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCaseStudiesImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}caseStudies/uploads`, data);
      dispatch(postCaseStudiesImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Case Studies Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCaseStudiesImageFailure());
      return false;
    }
  };
}

export function performPostCaseStudiesFile(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCaseStudiesImageBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}caseStudies/uploadFile`,
        data
      );
      dispatch(postCaseStudiesImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Case Studies File Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCaseStudiesImageFailure());
      return false;
    }
  };
}

export function performPostCaseStudies(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postCaseStudiesBegin());
    try {
      const result = await axios.post(`${BASE_URL}caseStudies`, data);
      dispatch(postCaseStudiesSuccess(result.data));
      dispatch(
        showSnack({
          message: "Case Studies Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postCaseStudiesFailure());
      return false;
    }
  };
}

export function performUpdateCaseStudies(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCaseStudiesBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}caseStudies/${id}`, data);
      dispatch(updateCaseStudiesSuccess(result.data));
      dispatch(
        showSnack({
          message: "Case Studies Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateCaseStudiesFailure());
      return false;
    }
  };
}

export function performDeleteCaseStudy(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCaseStudiesBegin());
    try {
      await axios.delete(`${BASE_URL}caseStudies/${id}`);
      dispatch(updateCaseStudiesSuccess());
      dispatch(
        showSnack({
          message: "Case Study Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateCaseStudiesFailure());
      return false;
    }
  };
}

export function performDeleteCaseStudyUserdetail(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateCaseStudiesBegin());
    try {
      const carrerid = data.carrerid;
      const userId = data.userId;
      await axios.delete(
        `${BASE_URL}caseStudies/${carrerid}/userdetails/${userId}`
      );
      dispatch(updateCaseStudiesSuccess());
      dispatch(
        showSnack({
          message: "User Detail Case Study Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(updateCaseStudiesFailure());
      return false;
    }
  };
}
