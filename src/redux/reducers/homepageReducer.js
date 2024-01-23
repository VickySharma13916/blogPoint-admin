import HOMEPAGE_TYPES from "../types/homepageTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case HOMEPAGE_TYPES.RESET_STATE:
      return initialState;

    case HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case HOMEPAGE_TYPES.GET_HOMEPAGE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HOMEPAGE_TYPES.POST_HOMEPAGE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HOMEPAGE_TYPES.POST_HOMEPAGE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HOMEPAGE_TYPES.POST_HOMEPAGE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HOMEPAGE_TYPES.UPDATE_HOMEPAGE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HOMEPAGE_TYPES.UPDATE_HOMEPAGE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HOMEPAGE_TYPES.UPDATE_HOMEPAGE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case HOMEPAGE_TYPES.POST_IMAGE_HOMEPAGE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case HOMEPAGE_TYPES.DELETE_HOMEPAGE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case HOMEPAGE_TYPES.DELETE_HOMEPAGE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case HOMEPAGE_TYPES.DELETE_HOMEPAGE_FAILURE:
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
