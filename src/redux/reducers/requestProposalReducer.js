import REQUEST_PROPOSAL_TYPES from "../types/requestProposalTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function requestReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROPOSAL_TYPES.RESET_STATE:
      return initialState;

    case REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case REQUEST_PROPOSAL_TYPES.GET_REQUEST_PROPOSAL_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case REQUEST_PROPOSAL_TYPES.DELETE_REQUEST_PROPOSAL_FAILURE:
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
