import React ,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { Action, Reducer, createStore } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';

export interface CalcOpAction extends Action {
  payload: {
    num: number,
  },
}

export type CalcOpActionCreator = (num: number) => CalcOpAction;

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

// state data
export type CalcToolState = {
  result: number,
};

// stateful logic
// newState <- reducer(currentState, action)
export const calcToolReducer: Reducer<CalcToolState, CalcOpAction> = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.num,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.num,
      };
    default:
      return state;
  }

};

export const calcToolStore = createStore(calcToolReducer);

export type CalcToolProps = {
  result: number,
  onAdd: (num: number) => void,
  onSubtract: (num: number) => void,
};

export function CalcTool(props: CalcToolProps) {

  const [ numInput, setNumInput ] = useState(0);

  return (
    <form>
      <div>Result: <span>{props.result}</span></div>
      <div><label>Num Input:
          <input type="number" value={numInput}
            onChange={e => setNumInput(e.target.valueAsNumber)} />
      </label></div>
      <fieldset>
        <button type="button" onClick={() => props.onAdd(numInput)}>+</button>
        <button type="button" onClick={() => props.onSubtract(numInput)}>-</button>
      </fieldset>
    </form>
  );
}

