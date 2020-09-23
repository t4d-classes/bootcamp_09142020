import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carToolReducer } from './reducers/carTool.reducers';

export const carStore = createStore(
  carToolReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
