// default imports
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

