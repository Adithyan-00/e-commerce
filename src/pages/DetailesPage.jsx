import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from "../styles/details.module.css";
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/authentification/Auth';

function DetailesPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const { dispatch } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const addToCart = () => {
    if (!user) {
      alert("Please login to add items to cart 🛑");
      return navigate('/login');
    }

    if (!selectedSize) {
      alert("Please select a size 🧵");
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, size: selectedSize, userId: user.id }
    });

    alert("Added to cart ✅");
    navigate('/cart');
  };

  const BuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size 🧵");
      return;
    }

    navigate('/checkout');
  };

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <>
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

            {/* Size Selection */}
            {product.sizes && (
              <div className={styles.sizeSelection}>
                <h4>Select Size:</h4>
                <div className={styles.sizeOptions}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
    </>
  );
}

export default DetailesPage;
