import { applicationTypes } from './applicationTypes';

const INITIAL_STATE = {
  applications: null,
  comments: []
};

export const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case applicationTypes.GET_APPLICATION:
      return {
        ...state,
        applications: action.payload
      };
    case applicationTypes.REMOVE_APPLICATION:
      return {
        ...state,
        applications: null,
        comments: []
      };
    case applicationTypes.GET_VIDEO_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case applicationTypes.POST_VIDEO_COMMENTS:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    default:
      return state;
  }
};
