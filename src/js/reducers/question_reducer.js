const QUESTION_SELECTED = 'QUESTION_SELECTED';
import BASEQUESTION from '../storage';

export function questionSelectedReducer(state = BASEQUESTION, action) {
  switch (action.type) {
    case QUESTION_SELECTED:
      return action.payload;
  }

  return state;
}
