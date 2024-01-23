import WEBINAR_CONFERENCE_TYPES from "../types/webinarConferenceTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function webinarConferenceReducer(state = initialState, action) {
  switch (action.type) {
    case WEBINAR_CONFERENCE_TYPES.RESET_STATE:
      return initialState;

    case WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case WEBINAR_CONFERENCE_TYPES.GET_WEBINAR_CONFERENCE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.POST_WEBINAR_CONFERENCE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.UPDATE_WEBINAR_CONFERENCE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case WEBINAR_CONFERENCE_TYPES.POST_IMAGE_WEBINAR_CONFERENCE_FAILURE:
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
