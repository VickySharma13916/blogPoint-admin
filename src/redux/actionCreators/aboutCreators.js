import {
  deleteImageSliderAboutMemberBegin,
  deleteImageSliderAboutMemberFailure,
  deleteImageSliderAboutMemberSuccess,
  deleteLifeAtTuracozTeamMemberBegin,
  deleteLifeAtTuracozTeamMemberFailure,
  deleteLifeAtTuracozTeamMemberSuccess,
  deleteTuracozTeamMemberBegin,
  deleteTuracozTeamMemberFailure,
  deleteTuracozTeamMemberSuccess,
  getImageSliderAboutBegin,
  getImageSliderAboutFailure,
  getImageSliderAboutSuccess,
  getLifeAtTuracozTeamBegin,
  getLifeAtTuracozTeamFailure,
  getLifeAtTuracozTeamSuccess,
  getTuracozTeamBegin,
  getTuracozTeamFailure,
  getTuracozTeamSuccess,
  postImageSliderAboutBegin,
  postImageSliderAboutFailure,
  postImageSliderAboutImageBegin,
  postImageSliderAboutImageFailure,
  postImageSliderAboutImageSuccess,
  postImageSliderAboutSuccess,
  postLifeAtTuracozTeamBegin,
  postLifeAtTuracozTeamFailure,
  postLifeAtTuracozTeamSuccess,
  postTuracozTeamBegin,
  postTuracozTeamFailure,
  postTuracozTeamImageBegin,
  postTuracozTeamImageFailure,
  postTuracozTeamImageSuccess,
  postTuracozTeamSuccess,
  updateImageSliderAboutBegin,
  updateImageSliderAboutFailure,
  updateImageSliderAboutSuccess,
  updateLifeAtTuracozTeamBegin,
  updateLifeAtTuracozTeamFailure,
  updateLifeAtTuracozTeamSuccess,
  updateTuracozTeamBegin,
  updateTuracozTeamFailure,
  updateTuracozTeamSuccess,
} from "../actions/aboutActions";
import { showSnack, resetSnack } from "../actions/alertActions";
import axios from "axios";
import { BASE_URL } from "../../services/constants";

// Turacoz Team

export function performGetTuracozTeamList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getTuracozTeamBegin());
    try {
      const result = await axios.get(`${BASE_URL}turacozteam`);
      dispatch(getTuracozTeamSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Turacoz Team Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getTuracozTeamFailure());
      return false;
    }
  };
}
export function performteamImageTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postTuracozTeamImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}turacozteam/uploads`, data);
      dispatch(postTuracozTeamImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team member Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postTuracozTeamImageFailure());
      return false;
    }
  };
}

export function performPostTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postTuracozTeamBegin());
    try {
      const result = await axios.post(`${BASE_URL}turacozteam`, data);
      dispatch(postTuracozTeamSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team Member Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postTuracozTeamFailure());
      return false;
    }
  };
}

export function performUpdateTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateTuracozTeamBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}turacozteam/${id}`, data);
      dispatch(updateTuracozTeamSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team Member Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateTuracozTeamFailure());
      return false;
    }
  };
}

export function performDeleteTuracozTeam(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteTuracozTeamMemberBegin());
    try {
      await axios.delete(`${BASE_URL}turacozteam/${id}`);
      dispatch(deleteTuracozTeamMemberSuccess());
      dispatch(
        showSnack({
          message: "Team Member Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteTuracozTeamMemberFailure());
      return false;
    }
  };
}

// Life At Turacoz

export function performGetLifeAtTuracozTeamList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getLifeAtTuracozTeamBegin());
    try {
      const result = await axios.get(`${BASE_URL}lifeAtTuracoz`);
      dispatch(getLifeAtTuracozTeamSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Team Member List Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getLifeAtTuracozTeamFailure());
      return false;
    }
  };
}

export function performteamImageLifeAtTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postTuracozTeamImageBegin());
    try {
      const result = await axios.post(`${BASE_URL}lifeAtTuracoz/uploads`, data);
      dispatch(postTuracozTeamImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team member Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postTuracozTeamImageFailure());
      return false;
    }
  };
}

export function performPostLifeAtTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postLifeAtTuracozTeamBegin());
    try {
      const result = await axios.post(`${BASE_URL}lifeAtTuracoz`, data);
      dispatch(postLifeAtTuracozTeamSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team Member Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postLifeAtTuracozTeamFailure());
      return false;
    }
  };
}

export function performUpdateLifeAtTuracozTeam(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateLifeAtTuracozTeamBegin());
    try {
      const id = data.id;
      const result = await axios.put(`${BASE_URL}lifeAtTuracoz/${id}`, data);
      dispatch(updateLifeAtTuracozTeamSuccess(result.data));
      dispatch(
        showSnack({
          message: "Team Member Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateLifeAtTuracozTeamFailure());
      return false;
    }
  };
}

export function performDeleteLifeAtTuracozTeam(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteLifeAtTuracozTeamMemberBegin());
    try {
      await axios.delete(`${BASE_URL}lifeAtTuracoz/${id}`);
      dispatch(deleteLifeAtTuracozTeamMemberSuccess());
      dispatch(
        showSnack({
          message: "Team Member Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteLifeAtTuracozTeamMemberFailure());
      return false;
    }
  };
}

// Image Slider About

export function performGetImageSliderAboutList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getImageSliderAboutBegin());
    try {
      const result = await axios.get(`${BASE_URL}imageSliderTurcoz`);
      dispatch(getImageSliderAboutSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: "Image Slider List Retrieved Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getImageSliderAboutFailure());
      return false;
    }
  };
}

export function performteamImageImageSliderAbout(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postImageSliderAboutImageBegin());
    try {
      const result = await axios.post(
        `${BASE_URL}imageSliderTurcoz/uploads`,
        data
      );
      dispatch(postImageSliderAboutImageSuccess(result.data));
      dispatch(
        showSnack({
          message: "Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postImageSliderAboutImageFailure());
      return false;
    }
  };
}

export function performPostImageSliderAbout(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postImageSliderAboutBegin());
    try {
      const result = await axios.post(`${BASE_URL}imageSliderTurcoz`, data);
      dispatch(postImageSliderAboutSuccess(result.data));
      dispatch(
        showSnack({
          message: "Image Slider Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postImageSliderAboutFailure());
      return false;
    }
  };
}

export function performUpdateImageSliderAbout(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(updateImageSliderAboutBegin());
    try {
      const id = data.id;
      const result = await axios.put(
        `${BASE_URL}imageSliderTurcoz/${id}`,
        data
      );
      dispatch(updateImageSliderAboutSuccess(result.data));
      dispatch(
        showSnack({
          message: "Image Slider Update Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(updateImageSliderAboutFailure());
      return false;
    }
  };
}

export function performDeleteImageSliderAbout(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteImageSliderAboutMemberBegin());
    try {
      await axios.delete(`${BASE_URL}imageSliderTurcoz/${id}`);
      dispatch(deleteImageSliderAboutMemberSuccess());
      dispatch(
        showSnack({
          message: "Image Slider Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteImageSliderAboutMemberFailure());
      return false;
    }
  };
}
