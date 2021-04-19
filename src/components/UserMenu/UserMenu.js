import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.wrapper}>
    {/* <img src={avatar} alt={name} width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button> */}
  </div>
);

export default UserMenu;
