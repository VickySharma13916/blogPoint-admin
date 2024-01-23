import NEWSLETTER_TYPES from "../types/newsletterTypes";

export const resetState = () => ({
  type: NEWSLETTER_TYPES.RESET_STATE,
});

export const getNewsletterListBegin = () => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_BEGIN,
});

export const getNewsletterListSuccess = (data) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_SUCCESS,
  payload: data,
});

export const getNewsletterListFailure = (error) => ({
  type: NEWSLETTER_TYPES.GET_NEWSLETTER_LIST_FAILURE,
  payload: error,
});

export const postNewsletterBegin = () => ({
  type: NEWSLETTER_TYPES.POST_NEWSLETTER_BEGIN,
});

export const postNewsletterSuccess = (data) => ({
  type: NEWSLETTER_TYPES.POST_NEWSLETTER_SUCCESS,
  payload: data,
});

export const postNewsletterFailure = (error) => ({
  type: NEWSLETTER_TYPES.POST_NEWSLETTER_FAILURE,
  payload: error,
});
export const updateNewsletterBegin = () => ({
  type: NEWSLETTER_TYPES.UPDATE_NEWSLETTER_BEGIN,
});

export const updateNewsletterSuccess = (data) => ({
  type: NEWSLETTER_TYPES.UPDATE_NEWSLETTER_SUCCESS,
  payload: data,
});

export const updateNewsletterFailure = (error) => ({
  type: NEWSLETTER_TYPES.UPDATE_NEWSLETTER_FAILURE,
  payload: error,
});

export const postNewsletterImageBegin = () => ({
  type: NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_BEGIN,
});

export const postNewsletterImageSuccess = (data) => ({
  type: NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_SUCCESS,
  payload: data,
});

export const postNewsletterImageFailure = (error) => ({
  type: NEWSLETTER_TYPES.POST_IMAGE_NEWSLETTER_FAILURE,
  payload: error,
});
