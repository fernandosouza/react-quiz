import { combineReducers } from 'redux';
import { questionSelectedReducer } from './question_reducer';

const rootReducer = combineReducers({
  question: questionSelectedReducer
});

export default rootReducer;
