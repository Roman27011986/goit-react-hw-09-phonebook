import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  signUpSuccess,
  signUpError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [signUpSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [signUpError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isLogIn = createReducer(false, {
  [signUpSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [signUpError]: (_, { payload }) => false,
  [loginError]: (_, { payload }) => false,
  [getCurrentUserError]: (_, { payload }) => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isLogIn,
  token,
  error,
});
