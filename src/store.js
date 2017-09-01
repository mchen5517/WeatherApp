import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist'

import rootReducer from './Reducers';

const middlewares = [];
if(process.env.NODE_ENV === 'development') middlewares.push(createLogger({collapsed: true}));
middlewares.push(thunkMiddleware);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ...middlewares
    ),
    autoRehydrate()
  )
);

persistStore(store, {whitelist: ['searchHistory']});

export default store;