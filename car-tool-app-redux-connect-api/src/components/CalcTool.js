import React, { useState } from 'react';

export const CalcTool = ({
  result, history,
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear,
}) => {

  const [ numInput, setNumInput ] = useState(0);

  const clear = () => {
    setNumInput(0);
    onClear();
  };

  return <form>

    <div>
      Result: {result}
    </div>
    <div>
      Num: <input type="number"  value={numInput}
        onChange={e => setNumInput(parseInt(e.target.value))} />
    </div>

    <div>
      <button type="button" onClick={() => add(numInput)}>+</button>
      <button type="button" onClick={() => subtract(numInput)}>-</button>
      <button type="button" onClick={() => multiply(numInput)}>-</button>
      <button type="button" onClick={() => divide(numInput)}>-</button>
    </div>

    <ul>
      {history.map(({ opType, opValue }, index) =>
        <li key={index}>{opType}: {opValue}</li>)}
    </ul>

    <button type="button" onClick={clear}>Clear</button>

  </form>;

};
