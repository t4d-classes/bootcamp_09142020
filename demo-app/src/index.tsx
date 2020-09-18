// default imports
import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';

import { ColorTool } from './components/ColorTool';

import { CarToolStoreProvider } from './contexts/carToolContext';
import { CarTool } from './components/CarTool';

import './index.css';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

ReactDOM.render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList}  />
    <CarToolStoreProvider>
      <CarTool />
    </CarToolStoreProvider>
  </>,
  document.querySelector('#root'),
);

