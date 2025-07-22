import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../styles/subnav.module.css";

function SubNav({ onSearchChange, onSortChange }) {
  return (
    <nav className={styles.subnav}>
      <ul className={styles.navList}>
        <div className={styles.leftLinks}>
          <li>
            <NavLink to="/men" className={({ isActive }) => isActive ? styles.active : styles.navl}>Men</NavLink>
          </li>
          <li>
            <NavLink to="/women" className={({ isActive }) => isActive ? styles.active : styles.navl}>Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids" className={({ isActive }) => isActive ? styles.active : styles.navl}>Kids</NavLink>
          </li>
        </div>

        <div className={styles.rightControls}>
          <li>
            <input
              type="search"
              placeholder="Search..."
              className={styles.search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </li>
          <li>
            <select className={styles.select} onChange={(e) => onSortChange(e.target.value)}>
              <option value="">Select Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default SubNav;
