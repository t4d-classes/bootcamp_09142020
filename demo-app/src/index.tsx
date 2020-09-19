import React ,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { Action, Reducer, createStore, bindActionCreators } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';

export interface CalcOpAction extends Action<string> {
  payload: {
    num: number,
  },
}

export type CalcAction = Action<string>;

export type CalcOpActionCreator = (num: number) => CalcOpAction;
export type CalcActionCreator = () => CalcAction;

export function isCalcOpAction(action: Action<string>): action is CalcOpAction {
  return [ ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION ].includes(action.type);
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
};

const initialState = { result: 0, history: [], };

// stateful logic
// newState <- reducer(currentState, action)
export const calcToolReducer: Reducer<CalcToolState, CalcOpAction | CalcAction> = (state = initialState, action) => {

  let newState = state;

  if (isCalcAction(action)) {
    newState = initialState;
  }

  if (isCalcOpAction(action)) {

    switch (action.type) {
      case ADD_ACTION:
        newState = {
          ...state,
          result: state.result + action.payload.num,
          history: [ ...state.history, { name: '+', value: action.payload.num } ],
        };
        break;
      case SUBTRACT_ACTION:
        newState = {
          ...state,
          result: state.result - action.payload.num,
          history: [ ...state.history, { name: '-', value: action.payload.num } ],
        };
        break;
      case MULTIPLY_ACTION:
        newState = {
          ...state,
          result: state.result - action.payload.num,
          history: [ ...state.history, { name: '*', value: action.payload.num } ],
        };
        break;
      case DIVIDE_ACTION:
        newState = {
          ...state,
          result: state.result - action.payload.num,
          history: [ ...state.history, { name: '/', value: action.payload.num } ],
        };
        break;
    }

  }

  return newState;

};

export const calcToolStore = createStore(calcToolReducer);

export type CalcToolProps = {
  result: number,
  history: CalcHistoryEntry[],
  onAdd: (num: number) => void,
  onSubtract: (num: number) => void,
  onMultiply: (num: number) => void,
  onDivide: (num: number) => void,
  onClear: () => void,
};

export function CalcTool(props: CalcToolProps) {

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      <form>
        <div>Result: <span>{props.result}</span></div>
        <div><label>Num Input:
            <input type="number" value={numInput}
              onChange={e => setNumInput(e.target.valueAsNumber)} />
        </label></div>
        <fieldset>
          <button type="button" onClick={() => props.onAdd(numInput)}>+</button>
          <button type="button" onClick={() => props.onSubtract(numInput)}>-</button>
          <button type="button" onClick={() => props.onMultiply(numInput)}>*</button>
          <button type="button" onClick={() => props.onDivide(numInput)}>/</button>
          <button type="button" onClick={() => props.onClear()}>Clear</button>
        </fieldset>
      </form>
      <ul>
        {props.history.map( (historyEntry, index) =>
          <li key={index}>{historyEntry.name} {historyEntry.value}</li>)}
      </ul>
    </>
  );
}

export function CalcToolContainer() {

  const result = useSelector<CalcToolState, number>(state => state.result);
  const history = useSelector<CalcToolState, CalcHistoryEntry[]>(state => state.history);

  const boundActionsMap = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
  }, useDispatch());

  return (
    <CalcTool result={result} history={history} {...boundActionsMap} />
  );

}

ReactDOM.render(
  <Provider store={calcToolStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);

