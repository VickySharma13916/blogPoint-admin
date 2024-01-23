import NEWSLETTER_SUBSCRIPTION_TYPES from "../types/newsletterSubscriptionTypes";

export const resetState = () => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.RESET_STATE,
});

export const getNewsletterSubscriptionListBegin = () => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_BEGIN,
});

export const getNewsletterSubscriptionListSuccess = (data) => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_SUCCESS,
  payload: data,
});

export const getNewsletterSubscriptionListFailure = (error) => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.GET_NEWSLETTER_SUBSCRIPTION_LIST_FAILURE,
  payload: error,
});

export const deleteNewsletterSubscriptionBegin = () => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_BEGIN,
});

export const deleteNewsletterSubscriptionSuccess = (data) => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_SUCCESS,
  payload: data,
});

export const deleteNewsletterSubscriptionFailure = (error) => ({
  type: NEWSLETTER_SUBSCRIPTION_TYPES.DELETE_NEWSLETTER_SUBSCRIPTION_LIST_FAILURE,
  payload: error,
});
