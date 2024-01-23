import axios from "axios";
import { BASE_URL } from "../../services/constants";
import { resetSnack, showSnack } from "../actions/alertActions";
import {
  deleteNewsletterSubscriptionBegin,
  deleteNewsletterSubscriptionFailure,
  deleteNewsletterSubscriptionSuccess,
  getNewsletterSubscriptionListBegin,
  getNewsletterSubscriptionListFailure,
  getNewsletterSubscriptionListSuccess,
} from "../actions/newsletterSubscriptionActions";

export function performGetNewsletterSubscriptionList() {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(getNewsletterSubscriptionListBegin());
    try {
      const result = await axios.get(`${BASE_URL}userDetail`);
      dispatch(getNewsletterSubscriptionListSuccess(result?.data?.docs?.data));
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
      dispatch(getNewsletterSubscriptionListFailure());
      return false;
    }
  };
}

export function performDeleteNewsletterSubscription(id) {
  return async (dispatch) => {
    dispatch(resetSnack());
    dispatch(deleteNewsletterSubscriptionBegin());
    try {
      await axios.delete(`${BASE_URL}userDetail/${id}`);
      dispatch(deleteNewsletterSubscriptionSuccess());
      dispatch(
        showSnack({
          message: "Newsletter Subscription Delete Successfully",
          options: {
            variant: "success",
          },
        })
      );
      return true;
    } catch (error) {
      dispatch(deleteNewsletterSubscriptionFailure());
      return false;
    }
  };
}
