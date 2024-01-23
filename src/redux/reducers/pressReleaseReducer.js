import PRESS_RELEASE_TYPES from "../types/pressReleaseTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function pressReleaseReducer(state = initialState, action) {
  switch (action.type) {
    case PRESS_RELEASE_TYPES.RESET_STATE:
      return initialState;

    case PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case PRESS_RELEASE_TYPES.GET_PRESS_RELEASE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case PRESS_RELEASE_TYPES.POST_PRESS_RELEASE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case PRESS_RELEASE_TYPES.UPDATE_PRESS_RELEASE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case PRESS_RELEASE_TYPES.POST_IMAGE_PRESS_RELEASE_FAILURE:
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
