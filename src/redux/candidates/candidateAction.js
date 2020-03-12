import { candidateTypes } from './candidateTypes';
import { getMethod } from '../../web/api';

export const getCandidates = () => {
  return async dispatch => {
    try {
      const { data } = await getMethod('/candidates');
      dispatch({
        type: candidateTypes.GET_CANDIDATE,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: candidateTypes.SET_ERROR,
        payload: error.message
      });
    }
  };
};

export const clearError = () => ({
  type: candidateTypes.REMOVE_ERROR
});
