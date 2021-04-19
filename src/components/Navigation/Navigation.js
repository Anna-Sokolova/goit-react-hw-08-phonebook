import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to={routes.home}
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.contacts}
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
