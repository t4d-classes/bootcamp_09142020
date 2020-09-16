import React, { useState, ChangeEvent } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';
import { ColorForm, ColorFormData } from './ColorForm';

export type ColorToolProps = {
  colors: Color[],
};

export function ColorTool(props: ColorToolProps) {

  const [ colors, setColors ] = useState(props.colors.concat());


  const addColor = (colorForm: ColorFormData) => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(
          color => <li key={color.id}>{color.name}</li>
        )}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}