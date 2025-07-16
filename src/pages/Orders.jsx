import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../components/authentification/Auth";

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

  if (orders.length === 0)
    return <h2 style={{ paddingTop: "100px" }}>No Orders Yet 💤</h2>;

  return (
    <div style={{ padding: "100px 40px" }}>
      <h2>Your Orders</h2>
      {orders.map((order, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "20px" }}>
          <img src={order.imageUrl} alt={order.title} width="100" />
          <div style={{ marginLeft: "20px" }}>
            <h3>{order.title}</h3>
            <p>Price: ₹{order.price}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Name: {order.customerName}</p>
            <p>Address: {order.address}</p>
            <p>Date: {order.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
