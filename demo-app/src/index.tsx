// default imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { carToolStore } from './stores/carToolStore';
import { CarToolContainer } from './containers/CarToolContainer';

import './index.css';

ReactDOM.render(
  <Provider store={carToolStore}>
    <CarToolContainer />
  </Provider>,
  document.querySelector('#root'),
);

