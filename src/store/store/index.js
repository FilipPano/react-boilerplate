import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../effect';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools),
);

sagaMiddleware.run(rootSaga);

export default store;
