import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  CalcToolContainer
} from './containers/CalcToolContainer';
import { calcStore } from './calcStore';

// const createStore = (reducerFn) => {

//   let currentState = undefined;
//   const subscribers = [];

//   return {
//     getState: () => currentState,
//     dispatch: (action) => {
//       currentState = reducerFn(currentState, action);
//       subscribers.forEach(callbackFn => callbackFn());
//     },
//     subscribe: (callbackFn) => {
//       subscribers.push(callbackFn);
//     },
//   };

// };

// const bindActionCreators = (actionsMap, dispatchFn) => {
//   return Object.keys(actionsMap).reduce( (boundActionsMap, actionKey) => {
//     boundActionsMap[actionKey] = (...params) => dispatchFn(actionsMap[actionKey](...params));
//     return boundActionsMap;
//   }, {} );
// };

// const { Provider, Consumer } = React.createContext();

// const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
//   return PresentationalComponent => {
//     class ContainerComponent extends React.Component {

//       constructor(props) {
//         super(props);
//         this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
//       }

//       componentDidMount() {
//         this.unsubscribeStore = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribeStore();
//       }

//       render() {
//         const stateProps = mapStateToPropsFn(this.props.store.getState());
//         return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
//       }
//     };

//     return () => <Consumer>{value => <ContainerComponent store={value} />}</Consumer>;
    
//   };
// };

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);
