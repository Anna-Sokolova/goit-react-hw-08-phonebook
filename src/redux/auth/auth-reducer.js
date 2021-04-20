import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

//destructuring
const {
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  logoutAuthError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

//изначальное состояние
const initialState = {
  name: null,
  email: null,
};

const userReducer = createReducer(initialState, {});

const tokenReducer = createReducer(null, {});

const errorReducer = createReducer(null, {});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default authReducer;
