import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productReducer from './home';

export const setupStore = (preloadedState) => configureStore({
  reducer: productReducer,
  middleware: [thunk],
  preloadedState,
});

const store = configureStore({
  reducer: productReducer,
  middleware: [thunk],
});

export default store;
