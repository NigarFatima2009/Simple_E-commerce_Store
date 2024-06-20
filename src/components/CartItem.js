import React from 'react';
import './Cart.css';


function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-items">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
