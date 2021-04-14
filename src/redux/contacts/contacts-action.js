import { v4 as uuidv4 } from 'uuid';
// import types from './contacts-types';

import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/change');

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = todoId => ({
//   type: types.DELETE,
//   payload: todoId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
