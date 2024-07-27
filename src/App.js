
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="App">
      <h1>Top N Products</h1>
      <div className="content">
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <ProductList products={products} onProductClick={handleProductClick} />
        )}
      </div>
    </div>
  );
}

export default App;
