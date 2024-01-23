import WEBINAR_CONFERENCE_TYPES from "../types/webinarConferenceTypes";

export const resetState = () => ({
  type: WEBINAR_CONFERENCE_TYPES.RESET_STATE,
});

export const getWebinarConferenceListBegin = () => ({
  type: WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_BEGIN,
});

export const getWebinarConferenceListSuccess = (data) => ({
  type: WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_SUCCESS,
  payload: data,
});

export const getWebinarConferenceListFailure = (error) => ({
  type: WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_FAILURE,
  payload: error,
});

export const postWebinarConferenceBegin = () => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_BEGIN,
});

export const postWebinarConferenceSuccess = (data) => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_SUCCESS,
  payload: data,
});

export const postWebinarConferenceFailure = (error) => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_FAILURE,
  payload: error,
});

export const postWebinarConferenceImageBegin = () => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_BEGIN,
});

export const postWebinarConferenceImageSuccess = (data) => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_SUCCESS,
  payload: data,
});

export const postWebinarConferenceImageFailure = (error) => ({
  type: WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_FAILURE,
  payload: error,
});

export const updateWebinarConferenceBegin = () => ({
  type: WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_BEGIN,
});

export const updateWebinarConferenceSuccess = (data) => ({
  type: WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_SUCCESS,
  payload: data,
});

export const updateWebinarConferenceFailure = (error) => ({
  type: WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_FAILURE,
  payload: error,
});
