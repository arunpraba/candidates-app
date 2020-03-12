import { combineReducers } from 'redux';
import { candidateReducer } from './candidates/candidateReducer';
import { questionReducer } from './questions/questionReducer';
import { applicationReducer } from './applications/applicationReducer';

const rootReducer = combineReducers({
  candidate: candidateReducer,
  question: questionReducer,
  application: applicationReducer
});

export default rootReducer;
