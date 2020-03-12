import { candidateTypes } from './candidateTypes';

const INITIAL_STATE = {
  candidates: [],
  error: ''
};

export const candidateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case candidateTypes.GET_CANDIDATE:
      return {
        ...state,
        candidates: action.payload
      };
    case candidateTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case candidateTypes.REMOVE_ERROR:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};
