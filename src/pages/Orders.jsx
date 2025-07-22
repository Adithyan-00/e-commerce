import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../components/authentification/Auth";
import styles from "../styles/order.module.css"
import Navbar from "../components/Navbar";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        const userOrders = res.data.filter(
          (order) => order.userEmail === user.email
        );
        setOrders(userOrders);
      })
      .catch((err) => console.error("Error", err));
  }, [user]);

  if (orders.length === 0) {
    return (
      <div className={styles.emptyOrders}>
        <h2>No Orders Yet 💤</h2>
      </div>
    );
  }

  return (
    <>
    
    <div className={styles.ordersContainer}>
      <h2 className={styles.ordersTitle}>Your Orders</h2>
      
      {orders.map((order, index) => (
        <div key={index} className={styles.orderItem}>
          <img 
            src={order.imageUrl} 
            alt={order.title} 
            className={styles.orderImage}
          />
          <div className={styles.orderDetails}>
            <h3 className={styles.orderTitle}>{order.title}</h3>
            <div className={styles.orderInfo}>
              <p className={styles.orderPrice}>
                <span className={styles.label}>Price:</span> ₹{order.price}
              </p>
             <p>
                <span className={styles.label}>Size:</span> {order.size}
              </p>

              <p className={styles.orderQuantity}>
                <span className={styles.label}>Quantity:</span> {order.quantity}
              </p>
              <p className={styles.orderCustomer}>
                <span className={styles.label}>Name:</span> {order.customerName}
              </p>
              <p className={styles.orderAddress}>
                <span className={styles.label}>Address:</span> {order.address}
              </p>
              <p className={styles.orderDate}>
                <span className={styles.label}>Date:</span> {order.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Orders;