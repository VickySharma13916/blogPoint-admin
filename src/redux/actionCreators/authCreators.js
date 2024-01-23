import { resetSnack, showSnack } from "../actions/alertActions";
import {
  getAdminDetailsBegin,
  getAdminDetailsFailure,
  getAdminDetailsSuccess,
  getProfileDetailsBegin,
  getProfileDetailsFailure,
  getProfileDetailsSuccess,
  loginBegin,
  loginFailure,
  loginSuccess,
  passwordVerifyEmailBegin,
  passwordVerifyEmailFailure,
  passwordVerifyEmailSuccess,
  postProfileDetailBegin,
  postProfileDetailFailure,
  postProfileDetailSuccess,
  postVerifyEmailBegin,
  postVerifyEmailFailure,
  postVerifyEmailSuccess,
  resetPasswordBegin,
  resetPasswordFailure,
  resetPasswordSuccess,
  setSubmitting,
} from "../actions/authActions";

import axios from "axios";
import { BASE_URL } from "../../services/constants";
import ENDPOINTS, { GET, POST } from "../../services/requests";

export function performGetAdminList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getAdminDetailsBegin());
    try {
      const result = await axios.get(`${BASE_URL}admin`);
      dispatch(getAdminDetailsSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: result?.data?.msg,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getAdminDetailsFailure());
      return false;
    }
  };
}

export function performLogin(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(loginBegin());
    try {
      const result = await axios.post(`${BASE_URL}admin/login`, data);
      if (result.status === 200) {
        dispatch(
          loginSuccess({
            token: result.data.token,
            user: result.data.user,
            role: null,
          })
        );
        dispatch(
          showSnack({
            message: "Logged in successfully!",
            options: {
              variant: "success",
            },
          })
        );
      } else {
        // Handle error messages from the backend
        dispatch(
          showSnack({
            message: result.data.error || "Something went wrong!",
            options: {
              variant: "error",
            },
          })
        );
      }
      return result;
    } catch (error) {
      dispatch(
        showSnack({
          message: "Something went wrong!",
          options: {
            variant: "error",
          },
        })
      );
      dispatch(loginFailure());
      return false;
    }
  };
}

export function performAdminImagePost(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postProfileDetailBegin());
    try {
      const result = await axios.post(`${BASE_URL}admin/uploads`, data);
      dispatch(postProfileDetailSuccess(result.data));
      dispatch(
        showSnack({
          message: "Admin Image Add Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postProfileDetailFailure());
      return false;
    }
  };
}

export function performSignUp(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postProfileDetailBegin());
    try {
      const result = await axios.post(`${BASE_URL}admin/signup`, data);
      dispatch(postProfileDetailSuccess(result.data));
      dispatch(
        showSnack({
          message: "Sign Up Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postProfileDetailFailure());
      return false;
    }
  };
}

export function performForgotPassword(data) {
  return async (dispatch) => {
    dispatch(setSubmitting(true));
    try {
      const result = await axios.post(`${BASE_URL}admin/forgot-password`, data);
      dispatch(
        showSnack({
          message: "Verification Link Send to the Email.",
          options: {
            variant: "success",
          },
        })
      );
      return result.data;
    } catch (error) {
      return false;
    } finally {
      dispatch(setSubmitting(false));
    }
  };
}

export function performEmailVerificationAdmin(data) {
  return async (dispatch) => {
    dispatch(setSubmitting(true));
    dispatch(postVerifyEmailBegin());
    try {
      const result = await POST({ url: ENDPOINTS.VERIFY_EMAIL, data });
      if (!result) {
        dispatch(
          showSnack({
            message: result.message,
            options: {
              variant: "success",
            },
          })
        );
      } else {
        dispatch(postVerifyEmailSuccess(result.data));
        dispatch(
          showSnack({
            message: result.message,
            options: {
              variant: "success",
            },
          })
        );
      }
      return result;
    } catch (error) {
      dispatch(postVerifyEmailFailure(error));
    } finally {
      dispatch(setSubmitting(false));
    }
  };
}

export function performForgotPasswordEmailVerificationAdmin(data) {
  return async (dispatch) => {
    dispatch(passwordVerifyEmailBegin());
    try {
      const result = await axios.post(`${BASE_URL}admin/verify-token`, data);
      if (!result) {
        dispatch(
          showSnack({
            message: "Invalid Token",
            options: {
              variant: "error",
            },
          })
        );
      } else {
        dispatch(passwordVerifyEmailSuccess());
        dispatch(
          showSnack({
            message: "Email Token Verified",
            options: {
              variant: "success",
            },
          })
        );
      }
      return result;
    } catch (error) {
      dispatch(passwordVerifyEmailFailure(error));
    }
  };
}

export function performResetPassword(data) {
  return async (dispatch) => {
    dispatch(setSubmitting(true));
    dispatch(resetPasswordBegin());
    try {
      const result = await axios.post(`${BASE_URL}admin/reset-password`, data);
      dispatch(resetPasswordSuccess(result));
      dispatch(
        showSnack({
          message: "Password Reset Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(resetPasswordFailure(error));
      return false;
    } finally {
      dispatch(setSubmitting(false));
    }
  };
}

export function performGetProfileDetails(data) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getProfileDetailsBegin());
    try {
      const result = await GET({ url: ENDPOINTS.GET_PROFILE });

      dispatch(getProfileDetailsSuccess(result.data));

      return true;
    } catch (error) {
      dispatch(getProfileDetailsFailure());
      return false;
    }
  };
}

export function performDeleteAdmin(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(postProfileDetailBegin());
    try {
      await axios.delete(`${BASE_URL}admin/${id}`);
      dispatch(postProfileDetailSuccess());
      dispatch(
        showSnack({
          message: "Admin Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(postProfileDetailFailure());
      return false;
    }
  };
}
