import React from 'react';

import { Color } from '../models/Color';

import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export type ColorToolProps = {
  colors: Color[],
};

export function ColorTool(props: ColorToolProps) {

  const [ colors, addColor ] = useList(props.colors.concat());

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