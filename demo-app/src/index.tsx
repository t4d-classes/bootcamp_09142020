import React ,{ useState, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { Action, Reducer, createStore, bindActionCreators, combineReducers } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { stringify } from 'querystring';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';
const DELETE_ENTRY_ACTION = 'DELETE_ENTRY';
const SET_VALIDATION_MESSAGE_ACTION = 'SET_VALIDATION_MESSAGE';
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

export type CalcHistoryEntry = {
  name: string,
  value: number,
};

// state data
export type CalcToolState = {
  result: number,
  history: CalcHistoryEntry[],
  validationMessage: string,
};

const initialState = { result: 0, history: [], validationMessage: '', };

type CalcActions = CalcOpAction | CalcHistoryAction | CalcAction;

export const resultReducer: Reducer<number, CalcActions> = (result = 0, action) => {

  if (isCalcAction(action)) {
    return 0;
  }

  if (isCalcOpAction(action)) {

    switch (action.type) {
      case ADD_ACTION:
        return result + action.payload.num;
      case SUBTRACT_ACTION:
        return result - action.payload.num;
      case MULTIPLY_ACTION:
        return result * action.payload.num;
      case DIVIDE_ACTION:
        return result / action.payload.num;
    }

  }

  return result;
};

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
  result: resultReducer,
  history: historyReducer,
  validationMessage: validationMessageReducer,
});

export const calcToolStore = createStore(calcToolReducer);

export type CalcToolProps = {
  result: number,
  history: CalcHistoryEntry[],
  validationMessage: string,
  onAdd: (num: number) => void,
  onSubtract: (num: number) => void,
  onMultiply: (num: number) => void,
  onDivide: (num: number) => void,
  onClear: () => void,
  onDeleteEntry: (entryIndex: number) => void,
  onSetValidationMessage: (message: string) => void,
};

export function CalcTool(props: CalcToolProps) {

  const [ numInput, setNumInput ] = useState(0);

  const clear = () => {
    setNumInput(0);
    props.onClear();
  };

  const validateOp = (fn: (num: number) => void) => {
    return () => {
      if (numInput < 0 || numInput > 10) {
        props.onSetValidationMessage('Number must be between 0 and 10, inclusive');
      } else {
        props.onSetValidationMessage('');
        fn(numInput);
      }
    };
  };

  const numChange = (e: ChangeEvent<HTMLInputElement>) => {

    const num = e.target.valueAsNumber;

    if (num < 0 || num > 10) {
      props.onSetValidationMessage('Number must be between 0 and 10, inclusive');
    } else {
      props.onSetValidationMessage('');
    }

    setNumInput(num);

  };

  return (
    <>
      {props.validationMessage && <div>{props.validationMessage}</div>}
      <form>
        <div>Result: <span>{props.result}</span></div>
        <div><label>Num Input:
            <input type="number" value={numInput}
              onChange={numChange} />
        </label></div>
        <fieldset>
          <button type="button" onClick={validateOp(props.onAdd)}>+</button>
          <button type="button" onClick={validateOp(props.onSubtract)}>-</button>
          <button type="button" onClick={validateOp(props.onMultiply)}>*</button>
          <button type="button" onClick={validateOp(props.onDivide)}>/</button>
          <button type="button" onClick={clear}>Clear</button>
        </fieldset>
      </form>
      <ul>
        {props.history.map( (historyEntry, index) =>
          <li key={index}>
            {historyEntry.name} {historyEntry.value}
            <button type="button" onClick={() => props.onDeleteEntry(index)}>X</button>
          </li>)}
      </ul>
    </>
  );
}

export function CalcToolContainer() {

  const result = useSelector<CalcToolState, number>(state => state.result);
  const history = useSelector<CalcToolState, CalcHistoryEntry[]>(state => state.history);

  const validationMessage = useSelector<CalcToolState, string>(state => {
    return state.validationMessage.toUpperCase();
  });

  const boundActionsMap = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteEntry: createDeleteEntryAction,
    onSetValidationMessage: createSetValidationMessageAction,
  }, useDispatch());

  return (
    <CalcTool result={result} history={history} validationMessage={validationMessage} {...boundActionsMap} />
  );

}

ReactDOM.render(
  <Provider store={calcToolStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);

