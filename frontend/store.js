import { createStore, applyMiddleware } from 'react-redux'
import RootReducer from ''
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore(preloadedState={}) {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
}