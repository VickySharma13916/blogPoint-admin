import NEWSLETTER_SUBSCRIPTION_TYPES from "../types/newsletterSubscriptionTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case NEWSLETTER_SUBSCRIPTION_TYPES.RESET_STATE:
      return initialState;

    case NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_FAILURE:
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
