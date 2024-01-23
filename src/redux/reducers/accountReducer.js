import ACCOUNT_TYPES from "../types/accountTypes";

const initialState = {
  submitting: false,
  error: null
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_TYPES.RESET_STATE:
      return {
        ...state,
        submitting: false,
        error: null
      };

    case ACCOUNT_TYPES.UPDATE_PROFILE_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null
      };

    case ACCOUNT_TYPES.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        submitting: false,
        error: null
      };

    case ACCOUNT_TYPES.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload && action.payload.error ? action.payload.error : null
      };

    case ACCOUNT_TYPES.UPDATE_PASSWORD_BEGIN:
      return {
        ...state,
        submitting: true,
        error: null
      };

    case ACCOUNT_TYPES.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        error: null
      };

    case ACCOUNT_TYPES.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload && action.payload.error ? action.payload.error : null
      };

    default:
      return state;
  }
}
