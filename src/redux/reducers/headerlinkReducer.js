import HEADER_TYPES from "../types/headerTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_TYPES.RESET_STATE:
      return initialState;

    case HEADER_TYPES.GET_HEADER_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case HEADER_TYPES.GET_HEADER_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case HEADER_TYPES.GET_HEADER_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HEADER_TYPES.POST_HEADER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HEADER_TYPES.POST_HEADER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HEADER_TYPES.POST_HEADER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HEADER_TYPES.UPDATE_HEADER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HEADER_TYPES.UPDATE_HEADER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HEADER_TYPES.UPDATE_HEADER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case HEADER_TYPES.DELETE_HEADER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case HEADER_TYPES.DELETE_HEADER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case HEADER_TYPES.DELETE_HEADER_FAILURE:
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
