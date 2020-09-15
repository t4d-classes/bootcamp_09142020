// default imports
import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

ReactDOM.render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList}  />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

