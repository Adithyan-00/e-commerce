import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/authentification/Auth";
import styles from "../styles/adminDashboard.module.css";

function Dashboard() {
  const { user, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  console.log(user);

  const HandleOrderpage = () =>{
    navigate('adminorders')
  }
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Admin 👑</h1>
      <p className={styles.subtitle}>Hello, {user?.userName}</p>

      <div className={styles.cardContainer}>
        <div className={styles.card} onClick={() => alert("Go to Product Management")}>
          <h3>📦 Manage Products</h3>
        </div>
        <div className={styles.card} onClick={HandleOrderpage}>
          <h3>📑 View Orders</h3>
        </div>
        <div className={styles.card} onClick={() => alert("Go to Users")}>
          <h3>👥 View Users</h3>
        </div>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        🚪 Logout
      </button>
    </div>
  );
}

export default Dashboard;
