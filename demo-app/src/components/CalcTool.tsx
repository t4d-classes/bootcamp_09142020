import React ,{ useState, ChangeEvent } from 'react';

import { CalcHistoryEntry } from '../models/calcTool';


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