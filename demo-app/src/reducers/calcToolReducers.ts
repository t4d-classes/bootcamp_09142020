import { Reducer, combineReducers } from 'redux';

import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
  CalcActions, isCalcAction, isCalcHistoryAction, isCalcOpAction, isCalcValidationAction,
} from '../actions/calcToolActions';
import { CalcHistoryEntry, CalcToolState } from '../models/calcTool';

const actionToOperator = new Map<string, string>();
actionToOperator.set(ADD_ACTION, '+');
actionToOperator.set(SUBTRACT_ACTION, '-');
actionToOperator.set(MULTIPLY_ACTION, '*');
actionToOperator.set(DIVIDE_ACTION, '/');

export const historyReducer: Reducer<CalcHistoryEntry[], CalcActions> = (history = [], action) => {

  if (isCalcAction(action)) {
    return [];
  }

  if (isCalcOpAction(action)) {
    return [ ...history, {
      name: actionToOperator.get(action.type) || 'unknown',
      value: action.payload.num,
    } ];
  }

  if (isCalcHistoryAction(action)) {
    const newHistory = [ ...history ];
    newHistory.splice(action.payload.entryIndex, 1);
    return newHistory;
  }

  return history;

};

// reducer functions must be pure fuctions...
// four qualities of a pure function
// 1. Only use data passed in via parameters
// 2. Parmeters can never be mutated
// 3. No side-effects
// 4. The only output is the return value
export const validationMessageReducer: Reducer<string, CalcActions> = (validationMessage = '', action) => {

  if (isCalcValidationAction(action)) {
    return action.payload.message;
  }

  return validationMessage;
}

// stateful logic
// newState <- reducer(currentState, action)
export const calcToolReducer: Reducer<CalcToolState, CalcActions> = combineReducers({
  history: historyReducer,
  validationMessage: validationMessageReducer,
});
