import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "./authentification/Auth";

function Navbar() {
  const { isAuthenticated, user, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className={styles.nav}>
      <div>
        <h1 style={{ color: "orange" }}>NeuWear</h1>
      </div>

      <div className={styles.nav}>
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

        {isAuthenticated && (
          <li>
            <NavLink to="/orders" className={({ isActive }) => isActive ? styles.active : styles.navl}>Orders</NavLink>
          </li>
        )}

        {!isAuthenticated ? (
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : styles.navl}>Login</NavLink>
          </li>
        ) : (
          <>
            <li style={{ color: "green", listStyle: "none" }}>
               {user?.name}
            </li>
            <li>
              <button onClick={handleLogout} className={styles.navl} style={{ background: "none", border: "none", cursor: "pointer", color: "red" }}>
                Logout
              </button>
            </li>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
