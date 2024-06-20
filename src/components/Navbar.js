import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css';

function Navbar() {
  const { user, logout } = useContext(StoreContext);

  return (
    <div className='container12'>
      <nav className='navbar'>
        <h1 className='heading'>Simple E-Commerce Store</h1>
        <div className='Navigation'>
          <div className="item">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </div>
          <div className="item">
            <Link to="/products">
              <FontAwesomeIcon icon={faBox} /> Products
            </Link>
          </div>
          <div className="item">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Link>
          </div>
          {user ? (
            <>
              <span className='wel'>Welcome, {user}!</span>
              <button className='well'onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <div className="item">
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
              </div>
              <div className="item">
                <Link to="/register">
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
