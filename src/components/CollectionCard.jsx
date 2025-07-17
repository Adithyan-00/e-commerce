import { Link } from 'react-router-dom';
import React from 'react';
import styles from './card.module.css'; 
function CollectionCard({ value: product }) {
  if (!product) return null;


  return (
    <div className={styles['product-card']}>
      <Link to={`/collection/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={styles['product-card__image']}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={styles['product-card__info']}>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default CollectionCard;
