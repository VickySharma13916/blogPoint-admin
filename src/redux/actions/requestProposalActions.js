import REQUEST_PROPOSAL_TYPES from "../types/requestProposalTypes";

export const resetState = () => ({
  type: REQUEST_PROPOSAL_TYPES.RESET_STATE,
});

export const getRequestProposalListBegin = () => ({
  type: REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_BEGIN,
});

export const getRequestProposalListSuccess = (data) => ({
  type: REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_SUCCESS,
  payload: data,
});

export const getRequestProposalListFailure = (error) => ({
  type: REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_FAILURE,
  payload: error,
});

export const deleteRequestProposalBegin = () => ({
  type: REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_BEGIN,
});

export const deleteRequestProposalSuccess = (data) => ({
  type: REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_SUCCESS,
  payload: data,
});

export const deleteRequestProposalFailure = (error) => ({
  type: REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_FAILURE,
  payload: error,
});
