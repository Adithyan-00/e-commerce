import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import useFetch from '../hooks/useFetch';
import CollectionCard from '../components/CollectionCard';
import SubNav from '../components/SubNav';

function Collection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: products, loading } = useFetch('http://localhost:5000/products');

  useEffect(() => {
    if (!products) return;

    let filtered = products.filter((product) =>
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
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onSortChange={(e) => setSortOrder(e.target.value)}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '100px 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filteredProducts.map((product) => (
          <CollectionCard key={product.id} value={product} />
        ))}
      </div>
    </>
  );
}

export default Collection;
