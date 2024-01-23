import CASESTUDIES_TYPES from "../types/caseStudiesTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function caseStudiesReducer(state = initialState, action) {
  switch (action.type) {
    case CASESTUDIES_TYPES.RESET_STATE:
      return initialState;

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CASESTUDIES_TYPES.POST_CASESTUDIES_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CASESTUDIES_TYPES.POST_CASESTUDIES_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CASESTUDIES_TYPES.POST_CASESTUDIES_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CASESTUDIES_TYPES.UPDATE_CASESTUDIES_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CASESTUDIES_TYPES.UPDATE_CASESTUDIES_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CASESTUDIES_TYPES.UPDATE_CASESTUDIES_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_FAILURE:
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
