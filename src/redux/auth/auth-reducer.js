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

//редьюсер для обработки действий юзера
const userReducer = createReducer(initialState, {
  [registerAuthSuccess]: (_, action) => action.payload.user,
  [loginAuthSuccess]: (_, action) => action.payload.user,
  [logoutAuthSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, action) => action.payload,
});

//редьюсер для получения токена
const tokenReducer = createReducer(null, {
  [registerAuthSuccess]: (_, action) => action.payload.token,
  [loginAuthSuccess]: (_, action) => action.payload.token,
  [logoutAuthSuccess]: () => null,
});

//редьюсер для удовлетворения запроса авторизации
const isAuthenticatedReducer = createReducer(false, {
  [registerAuthSuccess]: () => true,
  [loginAuthSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerAuthError]: () => false,
  [loginAuthError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutAuthSuccess]: () => false,
});

//редьюсер для спиннера
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
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

//редьюсер для обработки ошибки
const errorReducer = createReducer(null, {
  [registerAuthError]: (_, action) => console.log(action.payload),
  [loginAuthError]: (_, action) => console.log(action.payload),
  [logoutAuthError]: (_, action) => console.log(action.payload),
  [getCurrentUserError]: (_, action) => console.log(action.payload),
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuthenticated: isAuthenticatedReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default authReducer;
