import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from '../mead/middleware/logger';
import monitorReducer from '../mead/reducers/monitorReducer';
import rootReducer from '../mead/reducers/index';

/**
 * configureStore
 * @param {function} preloadedState - The pre-loaded version of the State.
 * @returns {function} state - The state for use.
 */
export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducer];
  const composedEnhancer = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
