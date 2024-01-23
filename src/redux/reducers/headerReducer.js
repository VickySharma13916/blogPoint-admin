import HEADER_ADD_TYPES from "../types/headerAddTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function HeaderAddReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_ADD_TYPES.RESET_STATE:
      return initialState;

    case HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case HEADER_ADD_TYPES.GET_HEADER_ADD_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HEADER_ADD_TYPES.POST_HEADER_ADD_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HEADER_ADD_TYPES.POST_HEADER_ADD_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HEADER_ADD_TYPES.POST_HEADER_ADD_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HEADER_ADD_TYPES.UPDATE_HEADER_ADD_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HEADER_ADD_TYPES.UPDATE_HEADER_ADD_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HEADER_ADD_TYPES.UPDATE_HEADER_ADD_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case HEADER_ADD_TYPES.DELETE_HEADER_ADD_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case HEADER_ADD_TYPES.DELETE_HEADER_ADD_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case HEADER_ADD_TYPES.DELETE_HEADER_ADD_FAILURE:
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
