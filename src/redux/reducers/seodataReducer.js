import SEO_DATA_TYPES from "../types/seodataTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function seoDataReducer(state = initialState, action) {
  switch (action.type) {
    case SEO_DATA_TYPES.RESET_STATE:
      return initialState;

    case SEO_DATA_TYPES.GET_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case SEO_DATA_TYPES.GET_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case SEO_DATA_TYPES.GET_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case SEO_DATA_TYPES.POST_SEO_DATA_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case SEO_DATA_TYPES.POST_SEO_DATA_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case SEO_DATA_TYPES.POST_SEO_DATA_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case SEO_DATA_TYPES.UPDATE_SEO_DATA_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case SEO_DATA_TYPES.UPDATE_SEO_DATA_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case SEO_DATA_TYPES.UPDATE_SEO_DATA_FAILURE:
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
