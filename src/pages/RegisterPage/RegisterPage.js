import React, { Component } from 'react';
import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.registerForm}>
        <h1>Регистрация пользователя</h1>
        <fieldset>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <label className={styles.label}>
              Имя
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>

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
              Зарегистрироваться
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default RegisterPage;
