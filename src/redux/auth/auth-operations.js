import axios from 'axios';
import { toast } from 'react-toastify';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSignUp = credentials => async dispatch => {
  dispatch(signUpRequest());
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(signUpSuccess(data));
    toast.success('Registred Succes!');
  } catch (error) {
    dispatch(signUpError(error.message));
    toast.error(error.message);
  }
};

export const userLogIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    dispatch(loginSuccess(data));
    toast.success('Welcome back!');
  } catch (error) {
    dispatch(loginError(error.message));
    toast.error(error.message);
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
    toast.success('have a nice day!');
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
