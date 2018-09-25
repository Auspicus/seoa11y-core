import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware as routerMiddlewareCreator } from 'react-router-redux';

import sagas from './sagas';
import { entityReducers, pagerReducers, queueReducer, errorReducer } from './reducers';
import queueMiddleware from './queue';
import generateAppRouter from './routes';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routerMiddleware = routerMiddlewareCreator(history);

const middlewares = [sagaMiddleware, routerMiddleware, queueMiddleware, loggerMiddleware];
//if (process.env.NODE_ENV === 'development') middlewares.push(loggerMiddleware);

const store = createStore(
  combineReducers({
    entities: entityReducers,
    pagers: pagerReducers,
    queue: queueReducer,
    errors: errorReducer,
    router: routerReducer
  }),
  applyMiddleware.apply(null, middlewares)
);

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    { generateAppRouter(history) }
  </Provider>,
  document.getElementById('root')
);
