// default imports
import React from 'react';
import ReactDOM from 'react-dom';

// named import
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);

