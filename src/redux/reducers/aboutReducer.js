import ABOUT_TYPES from "../types/aboutTypes";

const initialState = {
  imagefetch: false,
  fetching: false,
  updating: false,
  error: null,
  turacozTeamList: [],
  lifeAtTuracozTeam: [],
};

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case ABOUT_TYPES.RESET_STATE:
      return initialState;

    case ABOUT_TYPES.GET_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case ABOUT_TYPES.GET_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        turacozTeamList: action.payload,
      };

    case ABOUT_TYPES.GET_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ABOUT_TYPES.POST_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.POST_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ABOUT_TYPES.POST_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        updating: false,
        lifeAtTuracozTeam: action.payload,
        error: null,
      };
    case ABOUT_TYPES.GET_LIFE_AT_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ABOUT_TYPES.UPDATE_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.UPDATE_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ABOUT_TYPES.UPDATE_TURACOZ_TEAM_FAILURE:
      return {
        ...state,
        updating: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    case ABOUT_TYPES.POST_TURACOZ_TEAM_IMAGE_BEGIN:
      return {
        ...state,
        imagefetch: true,
        error: null,
      };
    case ABOUT_TYPES.POST_TURACOZ_TEAM_IMAGE_SUCCESS:
      return {
        ...state,
        imagefetch: false,
        error: null,
      };
    case ABOUT_TYPES.POST_TURACOZ_TEAM_IMAGE_FAILURE:
      return {
        ...state,
        imagefetch: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };
    case ABOUT_TYPES.DELETE_TURACOZ_TEAM_BEGIN:
      return {
        ...state,
        updating: true,
        error: null,
      };
    case ABOUT_TYPES.DELETE_TURACOZ_TEAM_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
      };
    case ABOUT_TYPES.DELETE_TURACOZ_TEAM_FAILURE:
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
