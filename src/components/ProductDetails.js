
import React from 'react';
import './ProductDetails.css';

function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <div className="details">
        <img src={product.image} alt={product.name} />
        <div>
          <p><strong>Company:</strong> {product.company}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <p><strong>Discount:</strong> {product.discount}</p>
          <p><strong>Availability:</strong> {product.availability}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
