import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcToolState, CalcHistoryEntry } from '../models/calcTool';
import { CalcTool } from '../components/CalcTool';
// import {
//   createAddAction, createSubtractAction, createMultiplyAction,
//   createDivideAction, createClearAction, createDeleteEntryAction,
//   createSetValidationMessageAction,
// } from '../actions';
import * as CalcToolActions from '../actions/calcToolActions';

import { resultSelector } from '../selectors/resultSelector';


export function CalcToolContainer() {

  const result = useSelector<CalcToolState, number>(resultSelector);

  const history = useSelector<CalcToolState, CalcHistoryEntry[]>(state => state.history);

  const validationMessage = useSelector<CalcToolState, string>(state => {
    return state.validationMessage.toUpperCase();
  });

  const boundActionsMap = bindActionCreators({
    onAdd: CalcToolActions.createAddAction,
    onSubtract: CalcToolActions.createSubtractAction,
    onMultiply: CalcToolActions.createMultiplyAction,
    onDivide: CalcToolActions.createDivideAction,
    onClear: CalcToolActions.createClearAction,
    onDeleteEntry: CalcToolActions.createDeleteEntryAction,
    onSetValidationMessage: CalcToolActions.createSetValidationMessageAction,
  }, useDispatch());

  return (
    <CalcTool result={result} history={history} validationMessage={validationMessage} {...boundActionsMap} />
  );

}
