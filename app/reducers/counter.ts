// @flow
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actions/counter';
import { Action } from './types';

export function counter (state : number = 0, action : Action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}