import ACCOUNT_TYPES from "../types/accountTypes";

export const resetState = () => ({
  type: ACCOUNT_TYPES.RESET_STATE,
});

export const updateProfileBegin = () => ({
  type: ACCOUNT_TYPES.UPDATE_PROFILE_BEGIN,
});

export const updateProfileSuccess = () => ({
  type: ACCOUNT_TYPES.UPDATE_PROFILE_SUCCESS,
});

export const updateProfileFailure = (error) => ({
  type: ACCOUNT_TYPES.UPDATE_PROFILE_FAILURE,
  payload: { error },
});

export const updatePasswordBegin = () => ({
  type: ACCOUNT_TYPES.UPDATE_PASSWORD_BEGIN,
});

export const updatePasswordSuccess = (data) => ({
  type: ACCOUNT_TYPES.UPDATE_PASSWORD_SUCCESS,
  payload: data,
});

export const updatePasswordFailure = (error) => ({
  type: ACCOUNT_TYPES.UPDATE_PASSWORD_FAILURE,
  payload: { error },
});
