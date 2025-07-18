import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavHome.module.css'

function NavHome() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>NeuWear</h1>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/collection" className={styles.link}>Collection</NavLink>
        </li>
        <li>
          <NavLink to="/support" className={styles.link}>Support</NavLink>
        </li>
        <li>
            <NavLink to="" className={styles.link}>About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavHome;
