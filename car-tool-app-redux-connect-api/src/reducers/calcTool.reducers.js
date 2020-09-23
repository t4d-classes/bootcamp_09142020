import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION,
} from '../actions/calcTool.actions';

const initialState = { result: 0, history: [] };

const appendHistory = (history, opType, opValue) => {
  return history.concat({
    opType, opValue,
  });
}

const ops = {
  [ ADD_ACTION ]: (a, b) => a + b, 
  [ SUBTRACT_ACTION ]: (a, b) => a + b, 
  [ MULTIPLY_ACTION ]: (a, b) => a + b, 
  [ DIVIDE_ACTION ]: (a, b) => a + b, 
};

export const calcReducer = (state = initialState, action) => {

  if (action.type === CLEAR_ACTION) {
    return {
      ...state,
      ...initialState,
    };
  }

  if (!Object.keys(ops).includes(action.type)) {
    return state;
  }

  const { type: opType, payload: { value: opValue } } = action; 

  return {
    ...state,
    result: ops[opType](state.result, opValue),
    history: appendHistory(state.history, opType, opValue),
  };
};
