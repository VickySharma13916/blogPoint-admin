import ANNOUNCEMENT_TYPES from "../types/announcementTypes";

export const resetState = () => ({
  type: ANNOUNCEMENT_TYPES.RESET_STATE,
});

export const getAnnouncementListBegin = () => ({
  type: ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_BEGIN,
});

export const getAnnouncementListSuccess = (data) => ({
  type: ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_SUCCESS,
  payload: data,
});

export const getAnnouncementListFailure = (error) => ({
  type: ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_FAILURE,
  payload: error,
});

export const getAnnouncementByIdBegin = () => ({
  type: ANNOUNCEMENT_TYPES.GET_BYID_ANNOUNCEMENT_BEGIN,
});

export const getAnnouncementByIdSuccess = (data) => ({
  type: ANNOUNCEMENT_TYPES.GET_BYID_ANNOUNCEMENT_SUCCESS,
  payload: data,
});

export const getAnnouncementByIdFailure = (error) => ({
  type: ANNOUNCEMENT_TYPES.GET_BYID_ANNOUNCEMENT_FAILURE,
  payload: error,
});

export const postAnnouncementBegin = () => ({
  type: ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_BEGIN,
});

export const postAnnouncementSuccess = (data) => ({
  type: ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_SUCCESS,
  payload: data,
});

export const postAnnouncementFailure = (error) => ({
  type: ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_FAILURE,
  payload: error,
});
export const updateAnnouncementBegin = () => ({
  type: ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_BEGIN,
});

export const updateAnnouncementSuccess = (data) => ({
  type: ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_SUCCESS,
  payload: data,
});

export const updateAnnouncementFailure = (error) => ({
  type: ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_FAILURE,
  payload: error,
});

export const postAnnouncementImageBegin = () => ({
  type: ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_BEGIN,
});

export const postAnnouncementImageSuccess = (data) => ({
  type: ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_SUCCESS,
  payload: data,
});

export const postAnnouncementImageFailure = (error) => ({
  type: ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_FAILURE,
  payload: error,
});
