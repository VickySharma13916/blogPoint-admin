import ANNOUNCEMENT_TYPES from "../types/announcementTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function announcementReducer(state = initialState, action) {
  switch (action.type) {
    case ANNOUNCEMENT_TYPES.RESET_STATE:
      return initialState;

    case ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case ANNOUNCEMENT_TYPES.GET_ANNOUNCEMENT_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.POST_ANNOUNCEMENT_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.UPDATE_ANNOUNCEMENT_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ANNOUNCEMENT_TYPES.POST_IMAGE_ANNOUNCEMENT_FAILURE:
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
