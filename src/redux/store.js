// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import { studentReducer } from './reducers/studentReducer';

const rootReducer = combineReducers({
  students: studentReducer,
});

export const store = createStore(rootReducer);
