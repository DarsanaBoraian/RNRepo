//yarn add redux-logger
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import {createLogger} from 'redux-logger';
import carReducer from './features/cars/carSlice';

//for attaching debugger in chrome
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

//for attaching debugger in chrome
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer,
  },

  //for attaching debugger in chrome

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
