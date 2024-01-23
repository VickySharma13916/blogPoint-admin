import SERVICE_TYPES from "../types/serviceTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_TYPES.RESET_STATE:
      return initialState;

    case SERVICE_TYPES.GET_SERVICE_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case SERVICE_TYPES.GET_SERVICE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case SERVICE_TYPES.GET_SERVICE_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case SERVICE_TYPES.POST_SERVICE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case SERVICE_TYPES.POST_SERVICE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case SERVICE_TYPES.POST_SERVICE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case SERVICE_TYPES.UPDATE_SERVICE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case SERVICE_TYPES.UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case SERVICE_TYPES.UPDATE_SERVICE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case SERVICE_TYPES.DELETE_SERVICE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case SERVICE_TYPES.DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case SERVICE_TYPES.DELETE_SERVICE_FAILURE:
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
