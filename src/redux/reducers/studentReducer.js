// src/redux/reducers/studentReducer.js
import { ADD_STUDENT } from '../actions/studentActions';

const initialState = {
  list: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
