import DASHBOARD_TYPES from "../types/dashboardTypes";

export const resetState = () => ({
  type: DASHBOARD_TYPES.RESET_STATE,
});

export const getDashboardBegin = () => ({
  type: DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_BEGIN,
});

export const getDashboardSuccess = (data) => ({
  type: DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_SUCCESS,
  payload: data,
});

export const getDashboardFailure = (error) => ({
  type: DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_FAILURE,
  payload: error,
});

export const setFilters = (data) => ({
  type: DASHBOARD_TYPES.SET_FILTERS,
  payload: data,
});

export const resetFilters = () => ({
  type: DASHBOARD_TYPES.RESET_FILTERS,
});
