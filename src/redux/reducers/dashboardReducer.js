import DASHBOARD_TYPES from "../types/dashboardTypes";

const initialFilters = Object.seal([
  {
    name: "status",
    type: "select",
    placeHolder: "Select Blocked Status",
    options: [
      {
        value: "Active",
        label: "Active",
      },
      {
        value: "Inactive",
        label: "Inactive",
      },
    ],
    value: null,
  },
  {
    name: "isSubscribed",
    type: "select",
    placeHolder: "Subscribed",
    options: [
      {
        value: "true",
        label: "True",
      },
      {
        value: "false",
        label: "False",
      },
    ],
    value: null,
  },
  {
    name: "subscriptionPlatform",
    type: "select",
    placeHolder: "Subscription Platform",
    options: [
      {
        value: "Android",
        label: "Android",
      },
      {
        value: "Ios",
        label: "Ios",
      },
    ],
    value: null,
  },
  {
    name: "subscriptionPlanType",
    type: "select",
    placeHolder: "Subscription Plan Type",
    options: [
      {
        value: "Yearly",
        label: "Yearly",
      },
      {
        value: "Monthly",
        label: "Monthly",
      },
    ],
    value: null,
  },
  {
    name: "createdAt",
    type: "daterange",
    label: "Date Added",
    value: null,
  },
]);

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
  details: null,
  goalsData: null,
  timelineData: [],
  filters: initialFilters,
  options: {},
  userReport: null,
  userGoalReport: null,
  preReportsList: [],
  reportSigned: null,
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_TYPES.RESET_STATE:
      return initialState;

    case DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
      };

    case DASHBOARD_TYPES.GET_DASHBOARD_DETAILS_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    default:
      return state;
  }
}
