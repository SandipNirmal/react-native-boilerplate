import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// import reducers from './reducers/index.js';
import App from './App';
import Login from './src/components/login';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunk)(
  createStore
);

AppRegistry.registerComponent('react_native_boilerplate', () => Login);
