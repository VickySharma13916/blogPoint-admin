import USER_TYPES from "../types/userTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_TYPES.RESET_STATE:
      return initialState;

    case USER_TYPES.GET_USER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case USER_TYPES.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload.data,
      };

    case USER_TYPES.GET_USER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case USER_TYPES.GET_USER_DETAILS_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case USER_TYPES.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        details: action.payload.data,
      };

    case USER_TYPES.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case USER_TYPES.UPDATE_USER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case USER_TYPES.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case USER_TYPES.UPDATE_USER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case USER_TYPES.DELETE_USER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case USER_TYPES.DELETE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case USER_TYPES.DELETE_USER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case USER_TYPES.CREATE_USER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case USER_TYPES.CREATE_USER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case USER_TYPES.CREATE_USER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    default:
      return state;
  }
}
