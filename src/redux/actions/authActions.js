import AUTH_TYPES from "../types/authTypes";

export const resetState = () => ({
  type: AUTH_TYPES.RESET_STATE,
});

export const updateUserData = (data) => ({
  type: AUTH_TYPES.UPDATE_USER_DATA,
  payload: data,
});

export const loginBegin = () => ({
  type: AUTH_TYPES.LOGIN_BEGIN,
});

export const loginSuccess = (data) => ({
  type: AUTH_TYPES.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: AUTH_TYPES.LOGIN_FAILURE,
  payload: { error },
});

export const refreshTokenSuccess = (data) => ({
  type: AUTH_TYPES.REFRESH_TOKEN_SUCCESS,
  payload: data,
});

export const setSubmitting = (data) => ({
  type: AUTH_TYPES.SET_SUBMITTING,
  payload: data,
});

export const logout = () => ({
  type: AUTH_TYPES.LOGOUT,
});

export const getProfileDetailsBegin = () => ({
  type: AUTH_TYPES.GET_PROFILE_DETAILS_BEGIN,
});

export const getProfileDetailsSuccess = (data) => ({
  type: AUTH_TYPES.GET_PROFILE_DETAILS_SUCCESS,
  payload: data,
});

export const getProfileDetailsFailure = (error) => ({
  type: AUTH_TYPES.GET_PROFILE_DETAILS_FAILURE,
  payload: { error },
});
export const postAdminProfileDetailsBegin = () => ({
  type: AUTH_TYPES.POST_PROFILE_BEGIN,
});

export const postAdminProfileDetailsSuccess = (data) => ({
  type: AUTH_TYPES.POST_PROFILE_SUCCESS,
  payload: data,
});

export const postAdminProfileDetailsFailure = (error) => ({
  type: AUTH_TYPES.POST_PROFILE_FAILURE,
  payload: { error },
});

export const getAdminDetailsBegin = () => ({
  type: AUTH_TYPES.GET_ADMIN_BEGIN,
});

export const getAdminDetailsSuccess = (data) => ({
  type: AUTH_TYPES.GET_ADMIN_SUCCESS,
  payload: data,
});

export const getAdminDetailsFailure = (error) => ({
  type: AUTH_TYPES.GET_ADMIN_FAILURE,
  payload: { error },
});
export const postVerifyEmailBegin = () => ({
  type: AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_BEGIN,
});

export const postVerifyEmailSuccess = (data) => ({
  type: AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_SUCCESS,
  payload: data,
});

export const postVerifyEmailFailure = (error) => ({
  type: AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_FAILURE,
  payload: { error },
});

export const passwordVerifyEmailBegin = () => ({
  type: AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_BEGIN,
});

export const passwordVerifyEmailSuccess = (data) => ({
  type: AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_SUCCESS,
  payload: data,
});

export const passwordVerifyEmailFailure = (error) => ({
  type: AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_FAILURE,
  payload: { error },
});

export const setAccessToken = (data) => ({
  type: AUTH_TYPES.SET_SUBMITTING,
  payload: data,
});

export const resetPasswordBegin = () => ({
  type: AUTH_TYPES.RESET_PASSWORD_BEGIN,
});

export const resetPasswordSuccess = (data) => ({
  type: AUTH_TYPES.RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFailure = (error) => ({
  type: AUTH_TYPES.RESET_PASSWORD_SUCCESS,
  payload: { error },
});

export const postProfileDetailBegin = () => ({
  type: AUTH_TYPES.POST_PROFILE_BEGIN,
});

export const postProfileDetailSuccess = (data) => ({
  type: AUTH_TYPES.POST_PROFILE_SUCCESS,
  payload: data,
});

export const postProfileDetailFailure = (error) => ({
  type: AUTH_TYPES.POST_PROFILE_FAILURE,
  payload: { error },
});
