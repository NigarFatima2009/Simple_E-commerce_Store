import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import Product from './Product';
import Footer from './Footer';
import './ProductList.css';

function ProductList() {
  const { products, addToCart } = useContext(StoreContext);
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' ? products : products.filter(p => {
    if (Array.isArray(p.category)) {
      return p.category.includes(filter); 
    } else {
      return p.category === filter;
    }
  });

  return (
    <div className='container1'>
      <h2 className="product-heading">Products</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button className="men-type" onClick={() => setFilter('men')}>Men</button>
        <button className="women-type" onClick={() => setFilter('women')}>Women</button>
      </div>
      <div className="hidden-images">
        {products.map((product) => (
          <img key={product.id} src={product.image} alt={product.name} className="hidden-image" />
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className='footer3'>
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
