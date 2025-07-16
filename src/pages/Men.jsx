import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styles from '../components/card.module.css';

function Men() {
  const { data: products, loading } = useFetch('http://localhost:5000/products');

  if (loading) return <p>Loading...</p>;

  const kids = products.filter(product => product.category === "men");

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '100px 40px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {kids.map((product) => (
        <div key={product.id} className={styles['product-card']}>
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
      ))}
    </div>
  );
}

export default Men;
