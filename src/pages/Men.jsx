import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import styles from '../components/card.module.css';
import SubNav from '../components/SubNav';
import Navbar from '../components/Navbar';

function Men() {
  const { data: products, loading } = useFetch('http://localhost:5000/products');

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!products) return;

    let filtered = products.filter(
      (product) =>
        product.category === 'men' &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortOrder]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      
      <SubNav 
        onSearchChange={setSearchTerm}
        onSortChange={setSortOrder}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 350px)',
        gap: '90px',
        padding: '50px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {filteredProducts.map((product) => (
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
    </>
  );
}

export default Men;
