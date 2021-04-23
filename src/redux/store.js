import contactsReducer from '../redux/contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const middlewares = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

  middlewares,
});

export default store;
