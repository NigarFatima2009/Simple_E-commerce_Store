import React, { createContext, useState } from 'react';
import axios from 'axios';
import './StoreContext.css';

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image4 from '../images/4.png';
import image5 from '../images/5.jpg';
import image9 from '../images/9.jpg';
import image3 from '../images/3.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image10 from '../images/10.jpg';

export const StoreContext = createContext();

const initialProducts = [
  { id: 1, name: 'Wireless Charger', price: (Math.random() * 100).toFixed(2), category: ['men', 'women'], image: image1 },
  { id: 2, name: 'Jewelry Cleaner', price: (Math.random() * 100).toFixed(2), category: 'women', image: image2 },
  { id: 3, name: 'Massage Device', price: (Math.random() * 100).toFixed(2), category: 'women', image: image4 },
  { id: 4, name: 'Rings Box', price: (Math.random() * 100).toFixed(2), category: 'women', image: image5 },
  { id: 5, name: 'Watch', price: (Math.random() * 100).toFixed(2), category: 'men', image: image9 },
  { id: 6, name: 'Diffuser', price: (Math.random() * 100).toFixed(2), category: 'women', image: image3 },
  { id: 7, name: 'Shirt', price: (Math.random() * 100).toFixed(2), category: 'men', image: image7 },
  { id: 8, name: 'Pant Coat', price: (Math.random() * 100).toFixed(2), category: 'men', image: image8 },
  { id: 9, name: 'Three Piece suit', price: (Math.random() * 100).toFixed(2), category: 'women', image: image10 },
];

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const StoreProvider = ({ children }) => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', { username, password });
      console.log('Registration successful:', response.data);
    } catch (error) {
      if (error.response?.data?.message === 'User already exists') {
        throw new Error('User already exists');
      }
      console.error('Registration error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
      setUser(response.data.username);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      // Forward the error with the message
      throw error;
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <StoreContext.Provider value={{ products, cart, addToCart, removeFromCart, user, login, logout, register }}>
      {children}
    </StoreContext.Provider>
  );
};
