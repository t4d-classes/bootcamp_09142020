import React from 'react';
import ReactDOM from 'react-dom';

import { CarToolStoreProvider } from '../src/contexts/carToolContext';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  <CarToolStoreProvider>
    <CarTool />
  </CarToolStoreProvider>,
  document.querySelector('#root'),
);
