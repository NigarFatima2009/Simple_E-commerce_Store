import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import Footer from './Footer';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useContext(StoreContext);

  // Function to group items into rows of two
  const groupItemsIntoRows = (items, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  // Group cart items into rows with two items per row
  const cartRows = groupItemsIntoRows(cart, 3);

  return (
    <div className='container2'>
      <div className="cart-container">
        <h2>Cart</h2>
        <div className="cart-items">
          {cartRows.map((row, rowIndex) => (
            <div key={rowIndex} className="cart-item-row">
              {row.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
            </div>
          ))}
        </div>
        <h3 className="cart-total">Total: ${cart.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2)}</h3>
      </div>
      <div className='footer1'><Footer/></div>
      
    </div>
  );
}

export default Cart;
