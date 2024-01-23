import NEWSLETTER_TYPES from "../types/newsletterTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function NewsletterReducer(state = initialState, action) {
  switch (action.type) {
    case NEWSLETTER_TYPES.RESET_STATE:
      return initialState;

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSLETTER_TYPES.POST_NEWSLETTER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case NEWSLETTER_TYPES.POST_NEWSLETTER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case NEWSLETTER_TYPES.POST_NEWSLETTER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSLETTER_TYPES.UPDATE_NEWSLETTER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case NEWSLETTER_TYPES.UPDATE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case NEWSLETTER_TYPES.UPDATE_NEWSLETTER_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_FAILURE:
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
