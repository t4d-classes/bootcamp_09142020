import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  CarToolContainer
} from './containers/CarToolContainer';
import { carStore } from './carStore';


ReactDOM.render(
  <Provider store={carStore}>
    <CarToolContainer />
  </Provider>,
  document.querySelector('#root'),
);

