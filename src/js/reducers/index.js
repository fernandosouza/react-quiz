import { combineReducers } from 'redux';
import { questionSelectedReducer } from './question_reducer';

const rootReducer = combineReducers({
  questionSelectd: questionSelectedReducer
});

export default rootReducer;
