import AUTH_TYPES from "../types/authTypes";

const initialState = {
  submitting: false,
  isAuthenticated: false,
  error: null,
  user: null,
  role: null,
  token: null,
  list: [],
  verifyPassword: false,
  profileData: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_TYPES.RESET_STATE:
      return {
        ...state,
        submitting: false,
        error: null,
      };

    case AUTH_TYPES.UPDATE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    case AUTH_TYPES.LOGIN_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
        token: null,
      };

    case AUTH_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        submitting: false,
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
        profileData: action.payload.user,
      };

    case AUTH_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        submitting: false,
        isAuthenticated: false,
        loginOtpSent: true,
      };

    case AUTH_TYPES.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };

    case AUTH_TYPES.RESET_PASSWORD_BEGIN:
      return {
        ...state,
        submitting: true,
      };

    case AUTH_TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
      };

    case AUTH_TYPES.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case AUTH_TYPES.SET_SUBMITTING:
      return {
        ...state,
        submitting: action.payload,
      };

    case AUTH_TYPES.LOGOUT:
      return initialState;

    case AUTH_TYPES.GET_PROFILE_DETAILS_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
      };

    case AUTH_TYPES.GET_PROFILE_DETAILS_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        submitting: false,
        error: null,
      };

    case AUTH_TYPES.GET_PROFILE_DETAILS_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case AUTH_TYPES.GET_ADMIN_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
      };

    case AUTH_TYPES.GET_ADMIN_SUCCESS:
      return {
        ...state,
        list: action.payload,
        submitting: false,
        error: null,
      };

    case AUTH_TYPES.GET_ADMIN_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null,
      };

    case AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_SUCCESS:
      return {
        ...state,
        submitting: false,
        error: null,
      };

    case AUTH_TYPES.POST_VERIFY_ACCOUNT_EMAIL_FAILURE:
      return {
        ...state,
        submitting: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_BEGIN:
      return {
        ...state,
        error: null,
      };

    case AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case AUTH_TYPES.PASSWORD_VERIFY_ACCOUNT_EMAIL_FAILURE:
      return {
        ...state,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    default:
      return state;
  }
}
