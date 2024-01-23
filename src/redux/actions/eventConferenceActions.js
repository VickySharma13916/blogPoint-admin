import EVENT_CONFERENCE_TYPES from "../types/eventConferenceTypes";

export const resetState = () => ({
  type: EVENT_CONFERENCE_TYPES.RESET_STATE,
});

export const getEventConferenceListBegin = () => ({
  type: EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_BEGIN,
});

export const getEventConferenceListSuccess = (data) => ({
  type: EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_SUCCESS,
  payload: data,
});

export const getEventConferenceListFailure = (error) => ({
  type: EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_FAILURE,
  payload: error,
});

export const postEventConferenceBegin = () => ({
  type: EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_BEGIN,
});

export const postEventConferenceSuccess = (data) => ({
  type: EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_SUCCESS,
  payload: data,
});

export const postEventConferenceFailure = (error) => ({
  type: EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_FAILURE,
  payload: error,
});

export const postEventConferenceImageBegin = () => ({
  type: EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_BEGIN,
});

export const postEventConferenceImageSuccess = (data) => ({
  type: EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_SUCCESS,
  payload: data,
});

export const postEventConferenceImageFailure = (error) => ({
  type: EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_FAILURE,
  payload: error,
});

export const updateEventConferenceBegin = () => ({
  type: EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_BEGIN,
});

export const updateEventConferenceSuccess = (data) => ({
  type: EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_SUCCESS,
  payload: data,
});

export const updateEventConferenceFailure = (error) => ({
  type: EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_FAILURE,
  payload: error,
});
