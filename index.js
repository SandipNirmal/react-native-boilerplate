import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunk)(
  createStore
);

AppRegistry.registerComponent('react_native_boilerplate', () => App);
