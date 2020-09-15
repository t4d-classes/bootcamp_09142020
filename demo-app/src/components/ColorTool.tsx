import React from 'react';

import { Color } from '../models/Color';

export function ColorTool() {

  const colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(
          color => <li key={color.id}>{color.name}</li>
        )}
      </ul>
    </>
  );
}