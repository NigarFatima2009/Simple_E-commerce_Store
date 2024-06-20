// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar'; 
import './styles.css';

function App() {
  return (
    <div>
  <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </StoreProvider>
    </div>
    );
}

export default App;
