import INPUT_CATEGORY_TYPES from "../types/inputCategoryTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function inputCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_CATEGORY_TYPES.RESET_STATE:
      return initialState;

    case INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case INPUT_CATEGORY_TYPES.GET_INPUT_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.POST_INPUT_CATEGORY_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.UPDATE_INPUT_CATEGORY_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case INPUT_CATEGORY_TYPES.DELETE_INPUT_CATEGORY_FAILURE:
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
