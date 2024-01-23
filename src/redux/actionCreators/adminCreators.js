import ENDPOINTS, { GET, POST } from "../../services/requests";
import {
  getAdminListBegin,
  getAdminListFailure,
  getAdminListSuccess,
  postAdminBegin,
  postAdminFailure,
  postAdminSuccess,
  setAdminSubmitting,
} from "../actions/adminActions";
import { showSnack } from "../actions/alertActions";

export function performGetAdminList(params) {
  return async (dispatch) => {
    dispatch(getAdminListBegin());
    try {
      const result = await GET({ url: ENDPOINTS.GET_ADMIN_LIST, params });
      dispatch(getAdminListSuccess(result.data));
      return result;
    } catch (error) {
      dispatch(getAdminListFailure());
      return false;
    }
  };
}

export function performCreateAdmin({ email }) {
  return async (dispatch) => {
    dispatch(postAdminBegin());
    dispatch(setAdminSubmitting(true));
    try {
      const result = await POST({
        url: ENDPOINTS.POST_ADMIN_EMAIL,
        data: {
          email: email,
        },
      });
      dispatch(postAdminSuccess(result));
      dispatch(
        showSnack({
          message: result.message,
          options: {
            variant: "success",
          },
        })
      );
      return result;
    } catch (error) {
      dispatch(postAdminFailure());
      return false;
    } finally {
      dispatch(setAdminSubmitting(false));
    }
  };
}
