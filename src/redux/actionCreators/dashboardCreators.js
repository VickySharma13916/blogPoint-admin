import {
  getDashboardBegin,
  getDashboardFailure,
  getDashboardSuccess,
} from "../actions/dashboardActions";
import ENDPOINTS, { GET } from "../../services/requests";

export function performGetDashboardDetails() {
  return async (dispatch) => {
    dispatch(getDashboardBegin());
    try {
      const result = await GET({ url: ENDPOINTS.GET_DASHBOARD_DETAIL });
      dispatch(getDashboardSuccess(result.data));
      return result;
    } catch (error) {
      dispatch(getDashboardFailure());
      return false;
    }
  };
}
