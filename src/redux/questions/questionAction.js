import { questionTypes } from './questionTypes';
import { getMethod } from '../../web/api';

export const getQuestions = () => {
  return async dispatch => {
    try {
      const { data } = await getMethod('/questions');
      let questions = {};
      if (data) {
        for (let item of data) {
          questions[item.id] = item.question;
        }
        dispatch({
          type: questionTypes.GET_QUESTION,
          payload: questions
        });
      }
    } catch (error) {
      console.warn(error.message);
    }
  };
};
