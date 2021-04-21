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

const userReducer = createReducer(initialState, {
  [registerAuthSuccess]: (_, action) => action.payload.user,
  [loginAuthSuccess]: (_, action) => action.payload.user,
  [logoutAuthSuccess]: () => initialState,
});

const tokenReducer = createReducer(null, {
  [registerAuthSuccess]: (_, action) => action.payload.token,
  [loginAuthSuccess]: (_, action) => action.payload.token,
  [logoutAuthSuccess]: () => null,
});

const loadingReducer = createReducer(false, {
  [registerAuthRequest]: () => true,
  [registerAuthSuccess]: () => false,
  [registerAuthError]: () => false,
  [loginAuthRequest]: () => true,
  [loginAuthSuccess]: () => false,
  [loginAuthError]: () => false,
  [logoutAuthRequest]: () => true,
  [logoutAuthSuccess]: () => false,
  [logoutAuthError]: () => false,
});

const errorReducer = createReducer(null, {
  [registerAuthError]: (_, action) => console.log(action.payload),
  [loginAuthError]: (_, action) => console.log(action.payload),
  [logoutAuthError]: (_, action) => console.log(action.payload),
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default authReducer;
