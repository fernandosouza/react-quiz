const ADD_QUESTION = 'ADD_QUESTION';
import BASEQUESTION from '../storage';

export function questionSelectedReducer(state = BASEQUESTION, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return action.payload;
  }

  return state;
}
