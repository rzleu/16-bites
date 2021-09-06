import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(preloadedState = {}) {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger),
  );
}
