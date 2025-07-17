import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/authentification/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/checkout.module.css";

function Checkout() {
  const { cart, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    pincode: "",
    paymentMethod: "cod",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePlaceOrder = async () => {
    const { name, address, pincode, paymentMethod, cardNumber, expiry, cvv } = form;

    if (!name || !address || !pincode) {
      alert("Please fill all fields");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardNumber || !expiry || !cvv) {
        alert("Please fill all card details");
        return;
      }
    }

    const orderData = cart.map((item) => ({
      ...item,
      customerName: name,
      address,
      pincode,
      paymentMethod,
      userEmail: user.email,
      date: new Date().toLocaleString(),
      cardInfo: paymentMethod === "card" ? { cardNumber, expiry } : null
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

        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={form.paymentMethod === "card"}
            onChange={handleChange}
          />
          Card
        </label>
      </div>

      
      {form.paymentMethod === "upi" && (
        <div className={styles.qrcontainer}>
          <img
            src="../assets/qr.jpg"
            alt="QR Code"
            className={styles.qrImage}
          />
        </div>
      )}

      
      {form.paymentMethod === "card" && (
        <div className={styles.creditCardContainer}>
          <div className={styles.creditCard}>
            <div className={styles.chip}></div>
            <div className={styles.cardNumber}>
              {form.cardNumber.padEnd(12, "*").replace(/(.{4})/g, "$1 ").trim()}
            </div>
            <div className={styles.cardDetails}>
              <div>
                <label>Expiry</label>
                <div>{form.expiry || "MM/YY"}</div>
              </div>
              <div>
                <label>CVV</label>
                <div>{form.cvv.replace(/./g, "*") || "***"}</div>
              </div>
            </div>
            <div className={styles.cardName}>{form.name || "FULL NAME"}</div>
          </div>

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={form.cardNumber}
            onChange={handleChange}
            maxLength="12"
            className={styles.input}
          />
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            maxLength="3"
            className={styles.input}
          />
        </div>
      )}

      
      <button onClick={handlePlaceOrder} className={styles.button}>
        ✅ Place Order
      </button>
    </div>
  );
}

export default Checkout;
