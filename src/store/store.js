/*import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import MapReducer from './reducers/Map';

 
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null : compose;

const rootReducer = combineReducers({
    MapReducer: MapReducer,
});

const store = createStore(rootReducer, 
    composeEnhancers(
    applyMiddleware(thunk)
));

 store = createStore(
    MapReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
applyMiddleware(thunkMiddleware)
);
export default store; */
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import stateAPI from './reducers/Map'

export const store = configureStore(
  stateAPI,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
)

export default store;