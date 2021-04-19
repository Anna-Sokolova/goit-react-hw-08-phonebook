import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

const AppBar = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </div>
    </Container>
  </header>
);

export default AppBar;
