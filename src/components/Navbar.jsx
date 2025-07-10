import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; 

function Navbar() {
  return (
    <div className={styles.nav}>
      <div>
        <h1 style={{color:"orange"}}>NeuWear</h1>
      </div>
      <div className={styles.nav} >
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navl}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/collection" className={({ isActive }) => isActive ? styles.active : styles.navl}>Collection</NavLink>
        </li>
        <li>
          <NavLink to="/men" className={({ isActive }) => isActive ? styles.active : styles.navl}>Men</NavLink>
        </li>
        <li>
          <NavLink to="/women" className={({ isActive }) => isActive ? styles.active : styles.navl}>Women</NavLink>
        </li>
        <li>
          <NavLink to="/kids" className={({ isActive }) => isActive ? styles.active : styles.navl}>Kids</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : styles.navl}>Cart</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : styles.navl}>Login</NavLink>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
