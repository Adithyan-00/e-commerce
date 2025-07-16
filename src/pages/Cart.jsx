
import { useCart } from '../components/CartContext';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) return <h2 style={{ padding: "80px" }}>🛒 Your cart is empty</h2>;

  return (
    <div style={{ padding: "100px 40px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", marginBottom: "20px" }}>
          <img src={item.imageUrl} alt={item.title} width="100" />
          <div style={{ marginLeft: "20px" }}>
            <h3>{item.title}</h3>
            <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
            <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
