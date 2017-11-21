import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import sagas from './sagas';
import reducers from './reducers';
import registerScreens from './screens';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const onError = (error) => {
  console.log('Redux saga error', error);
};

const sagaMiddleware = createSagaMiddleware({ onError });
middlewares.push(sagaMiddleware);

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
registerScreens(store, Provider);
sagaMiddleware.run(sagas);

export default store;
