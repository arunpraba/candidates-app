import { questionTypes } from './questionTypes';

const INITIAL_STATE = {
  questions: null
};

export const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case questionTypes.GET_QUESTION:
      return {
        ...state,
        questions: action.payload
      };
    default:
      return state;
  }
};
