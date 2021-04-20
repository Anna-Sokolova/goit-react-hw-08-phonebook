import { createAction } from '@reduxjs/toolkit';

//экшены для логинизации
const loginAuthRequest = createAction('auth/loginRequest');
const loginAuthSuccess = createAction('auth/loginSuccess');
const loginAuthError = createAction('auth/loginError');

//экшены для регистрации
const registerAuthRequest = createAction('auth/registerRequest');
const registerAuthSuccess = createAction('auth/registerSuccess');
const registerAuthError = createAction('auth/registerError');

//экшены для кнопки Выйти
const logoutAuthRequest = createAction('auth/logoutRequest');
const logoutAuthSuccess = createAction('auth/logoutSuccess');
const logoutAuthError = createAction('auth/logoutError');

//экшены для получения текущего юзера или re-fresh
const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
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
};
