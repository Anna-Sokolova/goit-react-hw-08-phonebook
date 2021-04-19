import React, { Component } from 'react';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.loginForm}>
        <h1>Авторизация пользователя</h1>
        <fieldset>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <label className={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" className={styles.btnSubmit}>
              Войти
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default LoginPage;
