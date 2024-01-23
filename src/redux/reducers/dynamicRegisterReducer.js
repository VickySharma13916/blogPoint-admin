import DYNAMIC_REGISTER_FORM_TYPES from "../types/dynamicRegisterTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function DynamicRegisterFormReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case DYNAMIC_REGISTER_FORM_TYPES.RESET_STATE:
      return initialState;

    case DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case DYNAMIC_REGISTER_FORM_TYPES.GET_DYNAMIC_REGISTER_FORM_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case DYNAMIC_REGISTER_FORM_TYPES.DELETE_DYNAMIC_REGISTER_FORM_FAILURE:
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
