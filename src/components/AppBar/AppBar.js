import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </Container>
  </header>
);

export default AppBar;
