// default imports
import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import './index.css';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hydrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

ReactDOM.render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList}  />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

