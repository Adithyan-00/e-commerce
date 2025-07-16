import React from 'react';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';
import CollectionCard from '../components/CollectionCard';

function Collection() {
  const { data: products, loading } = useFetch('http://localhost:5000/products');

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '100px 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {products.map((product) => (
          <CollectionCard key={product.id} value={product} />
        ))}
      </div>
    </>
  );
}

export default Collection;