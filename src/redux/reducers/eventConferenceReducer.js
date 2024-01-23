import EVENT_CONFERENCE_TYPES from "../types/eventConferenceTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function eventConferenceReducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_CONFERENCE_TYPES.RESET_STATE:
      return initialState;

    case EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case EVENT_CONFERENCE_TYPES.GET_EVENT_CONFERENCE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.POST_EVENT_CONFERENCE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.UPDATE_EVENT_CONFERENCE_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case EVENT_CONFERENCE_TYPES.POST_IMAGE_EVENT_CONFERENCE_FAILURE:
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
