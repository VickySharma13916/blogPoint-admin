import CONTACT_TYPES from "../types/contactTypes";

export const resetState = () => ({
  type: CONTACT_TYPES.RESET_STATE,
});

export const getContactListBegin = () => ({
  type: CONTACT_TYPES.GET_CONTACT_LIST_BEGIN,
});

export const getContactListSuccess = (data) => ({
  type: CONTACT_TYPES.GET_CONTACT_LIST_SUCCESS,
  payload: data,
});

export const getContactListFailure = (error) => ({
  type: CONTACT_TYPES.GET_CONTACT_LIST_FAILURE,
  payload: error,
});

export const deleteContactBegin = () => ({
  type: CONTACT_TYPES.DELETE_CONTACT_BEGIN,
});

export const deleteContactSuccess = (data) => ({
  type: CONTACT_TYPES.DELETE_CONTACT_SUCCESS,
  payload: data,
});

export const deleteContactFailure = (error) => ({
  type: CONTACT_TYPES.DELETE_CONTACT_FAILURE,
  payload: error,
});
