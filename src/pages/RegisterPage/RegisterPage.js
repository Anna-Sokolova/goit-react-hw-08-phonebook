import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import operationsAuth from '../../redux/auth/auth-operations';
import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = e => {
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(operationsAuth.register(data)),
});

//сокращенная запись как вариант
// const mapDispatchToProps = {
//   onRegister: dispatch(operationsAuth.register),
// };

export default connect(null, mapDispatchToProps)(RegisterPage);
