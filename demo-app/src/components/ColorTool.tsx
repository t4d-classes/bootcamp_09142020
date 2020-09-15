import React, { useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';

export type ColorToolProps = {
  colors: Color[],
};

export function ColorTool(props: ColorToolProps) {

  const [ colors, setColors ] = useState(props.colors.concat());

  // useState hook returns an array, 2 items: state data, state update function (updates the state, and triggers the re-render)

  // array destructuring
  // colorForm will be a local variable which the state data will be assigned to
  // setColorForm will be a local variable which the update function will be assigned it
  const [ colorForm, setColorForm ] = useState({
    colorName: '', colorHexcode: '',
  } /* initial value used to initialize the state on the first render */);

  const change = (e: ChangeEvent<HTMLInputElement>) => {

    setColorForm({
      ...colorForm, // object spread operation copies the properties from the original color form, into the new object

      // computed property - the expression in the square braces will be evaluated and the result
      // will be the name of the property which is updated
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {

    setColors(colors.concat({
      name: colorForm.colorName,
      hexcode: colorForm.colorHexcode,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    setColorForm({
      colorName: '', colorHexcode: '',
    });

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(
          color => <li key={color.id}>{color.name}</li>
        )}
      </ul>
      <form>
        <div>
          <label>
            Color Name
            <input type="text" name="colorName" value={colorForm.colorName} onChange={change} />
          </label>
        </div>
        <div>
          <label>
            Color Hexcode
            <input type="text" name="colorHexcode" value={colorForm.colorHexcode} onChange={change} />
          </label>
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );
}