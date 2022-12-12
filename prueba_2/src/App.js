import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
