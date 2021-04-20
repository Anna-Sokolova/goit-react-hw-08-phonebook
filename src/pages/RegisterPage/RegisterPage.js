import React, { Component } from 'react';
import Title from '../../components/Title';
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
      <>
        <Title title="Регистрация пользователя" />
        <div className={styles.registerForm}>
          <fieldset>
            <form
              onSubmit={this.handleSubmit}
              className={styles.form}
              autoComplete="off"
            >
              <label className={styles.label}>
                Имя
                <input
                className={styles.formInput}
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Почта
                <input
                className={styles.formInput}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <label className={styles.label}>
                Пароль
                <input
                className={styles.formInput}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </label>

              <button type="submit" className={styles.btnSubmit}>
                Зарегистрироваться
              </button>
            </form>
          </fieldset>
        </div>
      </>
    );
  }
}

export default RegisterPage;
