import MEDIA_TYPES from "../types/mediaTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  MEDIA: [],
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case MEDIA_TYPES.RESET_STATE:
      return initialState;

    case MEDIA_TYPES.GET_MEDIA_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case MEDIA_TYPES.GET_MEDIA_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        MEDIA: action.payload,
      };

    case MEDIA_TYPES.GET_MEDIA_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case MEDIA_TYPES.POST_MEDIA_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case MEDIA_TYPES.POST_MEDIA_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case MEDIA_TYPES.POST_MEDIA_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case MEDIA_TYPES.DELETE_MEDIA_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case MEDIA_TYPES.DELETE_MEDIA_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case MEDIA_TYPES.DELETE_MEDIA_FAILURE:
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
