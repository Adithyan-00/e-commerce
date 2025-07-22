import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import CollectionCard from '../components/CollectionCard';
import SubNav from '../components/SubNav';
import { useAuth } from '../components/authentification/Auth';

function Collection() {
  const {user} = useAuth()
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: products, loading } = useFetch('http://localhost:5000/products');

  useEffect(() => {
  if (!products) return;

  console.log("Sort Order:", sortOrder);

  let filtered = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder === 'low') {
    filtered.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortOrder === 'high') {
    filtered.sort((a, b) => Number(b.price) - Number(a.price));
  }

  setFilteredProducts(filtered);
}, [products, searchTerm, sortOrder]);


  if (loading) return <p>Loading...</p>;

  console.log(user);
  

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
          <CollectionCard key={product.id} value={product} />
        ))}
      </div>
    </>
  );
}

export default Collection;
