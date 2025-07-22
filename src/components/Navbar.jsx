import { NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "./authentification/Auth";
import { useCart } from "../components/CartContext"; 

function Navbar() {
  const { isAuthenticated, user, dispatch } = useAuth();
  const { cart } = useCart(); 

  const userName = user?.userName;
  const newName = userName?.toUpperCase();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    
  };

  return (
    
  <div className={styles.nav}>
    <div className={styles.navLeft}>
      <h1 style={{ color: "orange" }}>NeuWear</h1>
    </div>

    <ul className={styles.navCenter}>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navl}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/collection" className={({ isActive }) => isActive ? styles.active : styles.navl}>Collection</NavLink>
      </li>

      {isAuthenticated && (
        <li>
          <NavLink to="/orders" className={({ isActive }) => isActive ? styles.active : styles.navl}>Orders</NavLink>
        </li>
      )}

      {isAuthenticated && (
        <li style={{ color: "orange", listStyle: "none" }}>
          {`Hii ! Welcome`} {newName}
        </li>
      )}
    </ul>

    <ul className={styles.navRight}>
      {isAuthenticated && (
        <>
          <li className="position-relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${isActive ? styles.active : styles.navl} d-flex align-items-center gap-1`
              }
            >
              <i className="bi bi-cart3"></i>
              {cart.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {cart.length}
                </span>
              )}
            </NavLink>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className={styles.navl}
              style={{ background: "none", border: "none", cursor: "pointer", color: "red" }}
            >
              Logout
            </button>
          </li>
        </>
      )}

      {!isAuthenticated && (
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : styles.navl}>Login</NavLink>
        </li>
      )}
    </ul>
  </div>
);

}

export default Navbar;
