import DYNAMIC_FORM_TYPES from "../types/dynamicFormTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function dynamicFormReducer(state = initialState, action) {
  switch (action.type) {
    case DYNAMIC_FORM_TYPES.RESET_STATE:
      return initialState;

    case DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case DYNAMIC_FORM_TYPES.GET_DYNAMIC_FORM_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.POST_DYNAMIC_FORM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.UPDATE_DYNAMIC_FORM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case DYNAMIC_FORM_TYPES.DELETE_DYNAMIC_FORM_FAILURE:
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
