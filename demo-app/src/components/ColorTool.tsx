import React from 'react';

import { Color } from '../models/Color';

export type ColorToolProps = {
  colors: Color[],
};

export function ColorTool(props: ColorToolProps) {

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(
          color => <li key={color.id}>{color.name}</li>
        )}
      </ul>
    </>
  );
}