import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/authentification/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/checkout.module.css"


function Checkout() {
  const { cart, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePlaceOrder = async () => {
    const { name, address, pincode, paymentMethod } = form;

    if (!name || !address || !pincode) {
      alert("Please fill all fields");
      return;
    }

    const orderData = cart.map((item) => ({
      ...item,
      customerName: name,
      address,
      pincode,
      paymentMethod,
      userEmail: user.email,
      date: new Date().toLocaleString(),
    }));

    try {
      for (const order of orderData) {
        await axios.post("http://localhost:5000/orders", order);
      }
      dispatch({ type: "CLEAR_CART" });
      alert("Order placed successfully ✅");
      navigate("/orders");
    } catch (err) {
      console.error(err);
      alert("Order failed ❌");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🧾 Checkout</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className={styles.input}
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        value={form.address}
        onChange={handleChange}
        rows="3"
        className={styles.textarea}
      />

      <input
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
        className={styles.input}
      />

      <div className={styles.radioGroup}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={form.paymentMethod === "cod"}
            onChange={handleChange}
          />
          Cash on Delivery
        </label>

        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={form.paymentMethod === "upi"}
            onChange={handleChange}
          />
          UPI / QR Code
        </label>
      </div>

      <button onClick={handlePlaceOrder} className={styles.button}>
        ✅ Place Order
      </button>
    </div>
  );
}

export default Checkout;
