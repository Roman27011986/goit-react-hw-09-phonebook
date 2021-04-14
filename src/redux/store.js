// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from '../redux/contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

// Ванила Redux

// const store = createStore(rootReducer, composeWithDevTools());

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

//----------------------------------------------------------------------------

//Toolkit

const ocntactsPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const rootReducer = {
//   contacts: persistReducer(persistConfig, contactsReducer),
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers(rootReducer),
// );

const store = configureStore({
  reducer: {
    contacts: persistReducer(ocntactsPersistConfig, contactsReducer),
  },
  // Добавил логгер в настройки хранилища

  middlewares,
});

const persistor = persistStore(store);

export default { store, persistor };
