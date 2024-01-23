import CASESTUDIES_TYPES from "../types/caseStudiesTypes";

export const resetState = () => ({
  type: CASESTUDIES_TYPES.RESET_STATE,
});

export const getCaseStudiesListBegin = () => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_BEGIN,
});

export const getCaseStudiesListSuccess = (data) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_SUCCESS,
  payload: data,
});

export const getCaseStudiesListFailure = (error) => ({
  type: CASESTUDIES_TYPES.GET_CASESTUDIES_LIST_FAILURE,
  payload: error,
});

export const getCaseStudiesByIdBegin = () => ({
  type: CASESTUDIES_TYPES.GET_BYID_CASESTUDIES_BEGIN,
});

export const getCaseStudiesByIdSuccess = (data) => ({
  type: CASESTUDIES_TYPES.GET_BYID_CASESTUDIES_SUCCESS,
  payload: data,
});

export const getCaseStudiesByIdFailure = (error) => ({
  type: CASESTUDIES_TYPES.GET_BYID_CASESTUDIES_FAILURE,
  payload: error,
});

export const postCaseStudiesBegin = () => ({
  type: CASESTUDIES_TYPES.POST_CASESTUDIES_BEGIN,
});

export const postCaseStudiesSuccess = (data) => ({
  type: CASESTUDIES_TYPES.POST_CASESTUDIES_SUCCESS,
  payload: data,
});

export const postCaseStudiesFailure = (error) => ({
  type: CASESTUDIES_TYPES.POST_CASESTUDIES_FAILURE,
  payload: error,
});
export const updateCaseStudiesBegin = () => ({
  type: CASESTUDIES_TYPES.UPDATE_CASESTUDIES_BEGIN,
});

export const updateCaseStudiesSuccess = (data) => ({
  type: CASESTUDIES_TYPES.UPDATE_CASESTUDIES_SUCCESS,
  payload: data,
});

export const updateCaseStudiesFailure = (error) => ({
  type: CASESTUDIES_TYPES.UPDATE_CASESTUDIES_FAILURE,
  payload: error,
});

export const postCaseStudiesImageBegin = () => ({
  type: CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_BEGIN,
});

export const postCaseStudiesImageSuccess = (data) => ({
  type: CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_SUCCESS,
  payload: data,
});

export const postCaseStudiesImageFailure = (error) => ({
  type: CASESTUDIES_TYPES.POST_IMAGE_CASESTUDIES_FAILURE,
  payload: error,
});
