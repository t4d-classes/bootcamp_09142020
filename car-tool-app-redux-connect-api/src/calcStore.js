import { createStore } from 'redux';

import { calcReducer } from './reducers/calcTool.reducers';

export const calcStore = createStore(calcReducer);
