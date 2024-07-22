import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { StoreProvider, StoreContext } from './context/StoreContext';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './styles.css';

const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(StoreContext);
  return user ? children : <Navigate to="/login" />;
};

// App Component
function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        </Routes>
        <ToastContainer /> 
      </Router>
    </StoreProvider>
  );
}

export default App;
