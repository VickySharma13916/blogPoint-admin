import WORKSHOP_TYPES from "../types/workshopTypes";

export const resetState = () => ({
  type: WORKSHOP_TYPES.RESET_STATE,
});

export const getWorkshopListBegin = () => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_BEGIN,
});

export const getWorkshopListSuccess = (data) => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_SUCCESS,
  payload: data,
});

export const getWorkshopListFailure = (error) => ({
  type: WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_FAILURE,
  payload: error,
});

export const PostWorkshopListBegin = () => ({
  type: WORKSHOP_TYPES.POST_WORKSHOP_LIST_BEGIN,
});

export const PostWorkshopListSuccess = (data) => ({
  type: WORKSHOP_TYPES.POST_WORKSHOP_LIST_SUCCESS,
  payload: data,
});

export const PostWorkshopListFailure = (error) => ({
  type: WORKSHOP_TYPES.POST_WORKSHOP_LIST_FAILURE,
  payload: error,
});

export const DeleteWorkshopListBegin = () => ({
  type: WORKSHOP_TYPES.DELETE_WORKSHOP_LIST_BEGIN,
});

export const DeleteWorkshopListSuccess = (data) => ({
  type: WORKSHOP_TYPES.DELETE_WORKSHOP_LIST_SUCCESS,
  payload: data,
});

export const DeleteWorkshopListFailure = (error) => ({
  type: WORKSHOP_TYPES.DELETE_WORKSHOP_LIST_FAILURE,
  payload: error,
});

export const UpdateWorkshopListBegin = () => ({
  type: WORKSHOP_TYPES.UPDATE_WORKSHOP_LIST_BEGIN,
});

export const UpdateWorkshopListSuccess = (data) => ({
  type: WORKSHOP_TYPES.UPDATE_WORKSHOP_LIST_SUCCESS,
  payload: data,
});

export const UpdateWorkshopListFailure = (error) => ({
  type: WORKSHOP_TYPES.UPDATE_WORKSHOP_LIST_FAILURE,
  payload: error,
});
