
import React from 'react';
import './ProductList.css';

function ProductList({ products, onProductClick }) {
  return (
    <div className="product-list">
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onProductClick(product)}>
            <h3>{product.name}</h3>
            <p>{product.company}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
