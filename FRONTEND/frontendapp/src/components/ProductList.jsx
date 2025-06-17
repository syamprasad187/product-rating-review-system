import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductList({ userId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  axios
    .get('/api/products')
    .then((response) => {
      console.log("Fetched Products Response:", response.data);
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error Fetching Products', error);
    });
}, []);


  return (
    <div className="grid gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} userId={userId} />
      ))}
    </div>
  );
}
