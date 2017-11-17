import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

export default store;
