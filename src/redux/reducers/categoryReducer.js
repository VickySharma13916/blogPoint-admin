import CATEGORY_TYPES from "../types/categoryTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_TYPES.RESET_STATE:
      return initialState;

    case CATEGORY_TYPES.GET_CATEGORY_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CATEGORY_TYPES.GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case CATEGORY_TYPES.GET_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CATEGORY_TYPES.POST_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CATEGORY_TYPES.POST_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CATEGORY_TYPES.POST_CATEGORY_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CATEGORY_TYPES.UPDATE_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CATEGORY_TYPES.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CATEGORY_TYPES.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case CATEGORY_TYPES.DELETE_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CATEGORY_TYPES.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CATEGORY_TYPES.DELETE_CATEGORY_FAILURE:
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
