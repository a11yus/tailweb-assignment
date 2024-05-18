// src/redux/actions/studentActions.js
export const ADD_STUDENT = 'ADD_STUDENT';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});
