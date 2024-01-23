import CARRER_TYPES from "../types/carrerTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function carrerReducer(state = initialState, action) {
  switch (action.type) {
    case CARRER_TYPES.RESET_STATE:
      return initialState;

    case CARRER_TYPES.GET_CARRER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CARRER_TYPES.GET_CARRER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case CARRER_TYPES.GET_CARRER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CARRER_TYPES.POST_CARRER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CARRER_TYPES.POST_CARRER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CARRER_TYPES.POST_CARRER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CARRER_TYPES.UPDATE_CARRER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CARRER_TYPES.UPDATE_CARRER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CARRER_TYPES.UPDATE_CARRER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CARRER_TYPES.POST_IMAGE_CARRER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CARRER_TYPES.POST_IMAGE_CARRER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CARRER_TYPES.POST_IMAGE_CARRER_FAILURE:
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
