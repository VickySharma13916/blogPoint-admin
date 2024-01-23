import CONTACT_TYPES from "../types/contactTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_TYPES.RESET_STATE:
      return initialState;

    case CONTACT_TYPES.GET_CONTACT_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case CONTACT_TYPES.GET_CONTACT_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case CONTACT_TYPES.GET_CONTACT_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case CONTACT_TYPES.DELETE_CONTACT_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case CONTACT_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case CONTACT_TYPES.DELETE_CONTACT_FAILURE:
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