import React from 'react';
import './Product.css';

function Product({ product, addToCart }) {
  return (
    <div className="product-page">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>    
      </div>
  );
}

export default Product;
