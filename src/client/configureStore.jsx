import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggerMiddleware from '../mead/middleware/logger.jsx';
import monitorReducer from '../mead/reducers/monitorReducer.jsx';
import rootReducer from '../mead/reducers/index.jsx';

/**
 * configureStore(); // Configures store.
 *
 * @param {any} preloadedState - The pre-loaded version of the State.
 * @returns {any} state - The state for use.
 */
export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducer];
  const composedEnhancer = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
