import { useCart } from '../components/CartContext';
import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/cart.module.css"
import { useAuth } from '../components/authentification/Auth';
import Navbar from '../components/Navbar';

function Cart() {
  const {user} = useAuth()
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {

    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>🛒 Your cart is empty</h2>
      </div>
    );
  }

  return (
    <>
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className={styles.itemImage}
          />
          <div className={styles.itemDetails}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemPrice}>
              ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
            </p>
            <div className={styles.itemActions}>
              <button 
                className={styles.quantityBtn}
                onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
              >
                -
              </button>
              <button 
                className={styles.quantityBtn}
                onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
              >
                +
              </button>
              <button 
                className={styles.removeBtn}
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id, userId: user.id } })}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <h3 className={styles.total}>Total: ₹{total}</h3>

      <button
        onClick={handleCheckout}
        className={styles.checkoutBtn}
      >
        Proceed to Checkout
      </button>
    </div>
    </>
  );
}

export default Cart;