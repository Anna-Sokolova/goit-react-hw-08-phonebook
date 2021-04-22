import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import operationsAuth from '../../redux/auth/auth-operations';
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

    if (this.state.email.trim() === '' || this.state.password.trim() === '') {
      alert('Please enter valid information!');
      this.reset();
      return;
    }
    this.props.onLogin(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <Title title="Авторизация пользователя" />
        <div className={styles.loginForm}>
          <fieldset>
            <form
              onSubmit={this.handleSubmit}
              className={styles.form}
              autoComplete="off"
            >
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
                Войти
              </button>
            </form>
          </fieldset>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(operationsAuth.logIn(data)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
