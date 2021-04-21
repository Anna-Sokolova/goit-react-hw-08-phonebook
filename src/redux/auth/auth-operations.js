import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* Создать нового пользователя
 * POST @ /users/signup
 * body { name, email, password }
 * credentials - это сам стейт ({ name, email, password }), который мы передаем с формы
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => dispatch => {
  dispatch(authActions.registerAuthRequest());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      // console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerAuthSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerAuthError(error.message)));
};

/* Залогинить пользователя
 * POST @ /users/login
 * body:
 *    { email, password }
 * credentials - это сам стейт ({ email, password }), который мы передаем с формы
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => dispatch => {
  dispatch(authActions.loginAuthRequest());

  axios
    .post('/users/login', credentials)
    .then(response => {
      // console.log(response);
      token.set(response.data.token);
      dispatch(authActions.loginAuthSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginAuthError(error.message)));
};

/* Разлогинить пользователя
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => dispatch => {
  dispatch(authActions.logoutAuthRequest());

  axios
    .post('/users/logout')
    .then(() => {
      // console.log(response);
      token.unset();
      dispatch(authActions.logoutAuthSuccess());
    })
    .catch(error => dispatch(authActions.logoutAuthError(error.message)));
};

/* Получить инфу о текущем пользователе
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const getCurrentUser = () => async (dispatch, getState) => {
  // const {
  //   auth: { token: persistedToken },
  // } = getState();
  // if (!persistedToken) {
  //   return;
  // }
  // token.set(persistedToken);
  // dispatch(authActions.getCurrentUserRequest());
  // try {
  //   const response = await axios.get('/users/current');
  //   dispatch(authActions.getCurrentUserSuccess(response.data));
  // } catch (error) {
  //   dispatch(authActions.getCurrentUserError(error.message));
  // }
};

export default { register, logOut, logIn, getCurrentUser };
