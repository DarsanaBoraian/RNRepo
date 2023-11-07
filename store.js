//yarn add redux-logger
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import {createLogger} from 'redux-logger';
import carReducer from './features/cars/carSlice';
import {todosApi} from './config/todosApi';

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
    todos: todosApi.reducer,
  },

  //for attaching debugger in chrome

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, todosApi.middleware),
});
