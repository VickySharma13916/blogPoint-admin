import WORKSHOP_TYPES from "../types/workshopTypes";

const initialState = {
  fetching: false,
  updating: false,
  error: null,
  list: [],
};

export default function WorkshopReducer(state = initialState, action) {
  switch (action.type) {
    case WORKSHOP_TYPES.RESET_STATE:
      return initialState;

    case WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        list: action.payload,
      };

    case WORKSHOP_TYPES.GET_ALL_WORKSHOP_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error:
          action.payload && action.payload.error ? action.payload.error : null,
      };

    // case WORKSHOP_TYPES.POST_BLOG_BEGIN:
    //   return {
    //     ...state,
    //     updating: true,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.POST_BLOG_SUCCESS:
    //   return {
    //     ...state,
    //     updating: false,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.POST_BLOG_FAILURE:
    //   return {
    //     ...state,
    //     updating: false,
    //     error:
    //       action.payload && action.payload.error ? action.payload.error : null,
    //   };

    // case WORKSHOP_TYPES.UPDATE_BLOG_BEGIN:
    //   return {
    //     ...state,
    //     updating: true,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.UPDATE_BLOG_SUCCESS:
    //   return {
    //     ...state,
    //     updating: false,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.UPDATE_BLOG_FAILURE:
    //   return {
    //     ...state,
    //     updating: false,
    //     error:
    //       action.payload && action.payload.error ? action.payload.error : null,
    //   };

    // case WORKSHOP_TYPES.POST_IMAGE_BLOG_BEGIN:
    //   return {
    //     ...state,
    //     updating: true,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.POST_IMAGE_BLOG_SUCCESS:
    //   return {
    //     ...state,
    //     updating: false,
    //     error: null,
    //   };
    // case WORKSHOP_TYPES.POST_IMAGE_BLOG_FAILURE:
    //   return {
    //     ...state,
    //     updating: false,
    //     error:
    //       action.payload && action.payload.error ? action.payload.error : null,
    //   };

    default:
      return state;
  }
}
