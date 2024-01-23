import FOOTER_TYPES from "../types/footerTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function footerReducer(state = initialState, action) {
  switch (action.type) {
    case FOOTER_TYPES.RESET_STATE:
      return initialState;

    case FOOTER_TYPES.GET_FOOTER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case FOOTER_TYPES.GET_FOOTER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case FOOTER_TYPES.GET_FOOTER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case FOOTER_TYPES.POST_FOOTER_LIST_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case FOOTER_TYPES.POST_FOOTER_LIST_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case FOOTER_TYPES.POST_FOOTER_LIST_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case FOOTER_TYPES.UPDATE_FOOTER_LIST_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case FOOTER_TYPES.UPDATE_FOOTER_LIST_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case FOOTER_TYPES.UPDATE_FOOTER_LIST_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case FOOTER_TYPES.DELETE_FOOTER_LIST_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };

    case FOOTER_TYPES.DELETE_FOOTER_LIST_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };

    case FOOTER_TYPES.DELETE_FOOTER_LIST_FAILURE:
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
