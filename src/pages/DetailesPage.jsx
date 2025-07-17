import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/details.module.css";
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

function DetailesPage() {
  const Navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert("Added to cart ✅");
    Navigate('/cart')
  };

  const BuyNow = ()=>{
    Navigate('/checkout')
  }

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <div className={styles.imageSection}>
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>₹{product.price}</p>
          <div className={styles.description}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.addToCart} onClick={addToCart}>Add to Cart</button>
            <button className={styles.buyNow} onClick={BuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailesPage;