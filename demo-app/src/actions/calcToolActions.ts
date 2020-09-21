import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_ENTRY_ACTION = 'DELETE_ENTRY';
export const SET_VALIDATION_MESSAGE_ACTION = 'SET_VALIDATION_MESSAGE';

export interface CalcOpAction extends Action<string> {
  payload: {
    num: number,
  },
}

export interface CalcHistoryAction extends Action<string> {
  payload: {
    entryIndex: number,
  },
}

export interface CalcValidationAction extends Action<string> {
  payload: {
    message: string,
  },
}

export type CalcAction = Action<string>;

export type CalcOpActionCreator = (num: number) => CalcOpAction;
export type CalcValidationActionCreator = (message: string) => CalcValidationAction;
export type CalcHistoryActionCreator = (entryIndex: number) => CalcHistoryAction;
export type CalcActionCreator = () => CalcAction;


export function isCalcOpAction(action: Action<string>): action is CalcOpAction {
  return [ ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION ].includes(action.type);
}

export function isCalcHistoryAction(action: Action<string>): action is CalcHistoryAction {
  return [ DELETE_ENTRY_ACTION ].includes(action.type);
}

export function isCalcValidationAction(action: Action<string>): action is CalcValidationAction {
  return [ SET_VALIDATION_MESSAGE_ACTION ].includes(action.type);
}

export function isCalcAction(action: Action<string>): action is CalcOpAction {
  return action.type === CLEAR_ACTION;
}
 
export const createAddAction: CalcOpActionCreator = (num) => ({
  type: ADD_ACTION,
  payload: {
    num,
  }
});

export const createSubtractAction: CalcOpActionCreator = (num) => ({
  type: SUBTRACT_ACTION,
  payload: {
    num,
  }
});

export const createMultiplyAction: CalcOpActionCreator = (num) => ({
  type: MULTIPLY_ACTION,
  payload: {
    num,
  }
});

export const createDivideAction: CalcOpActionCreator = (num) => ({
  type: DIVIDE_ACTION,
  payload: {
    num,
  }
});

export const createDeleteEntryAction: CalcHistoryActionCreator = (entryIndex) => ({
  type: DELETE_ENTRY_ACTION,
  payload: {
    entryIndex,
  }
});

export const createSetValidationMessageAction: CalcValidationActionCreator = (message) => ({
  type: SET_VALIDATION_MESSAGE_ACTION,
  payload: {
    message,
  }
});

export const createClearAction: CalcActionCreator = () => ({
  type: CLEAR_ACTION,
});

export type CalcActions = CalcOpAction | CalcHistoryAction | CalcAction;
