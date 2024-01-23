import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
    deleteRequestProposalBegin,
    deleteRequestProposalFailure,
    deleteRequestProposalSuccess,
    getRequestProposalListBegin,
    getRequestProposalListFailure,
    getRequestProposalListSuccess
} from "../actions/requestProposalActions";

export function performGetRequestProposalList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getRequestProposalListBegin());
    try {
      const result = await axios.get(`${BASE_URL}requestProposal`);
      dispatch(getRequestProposalListSuccess(result?.data?.docs?.data));
      dispatch(
        showSnack({
          message: result?.data?.msg,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(getRequestProposalListFailure());
      return false;
    }
  };
}

export function performDeleteRequestProposal(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteRequestProposalBegin());
    try {
      await axios.delete(`${BASE_URL}requestProposal/${id}`);
      dispatch(deleteRequestProposalSuccess());
      dispatch(
        showSnack({
          message: "Request Proposal Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteRequestProposalFailure());
      return false;
    }
  };
}
