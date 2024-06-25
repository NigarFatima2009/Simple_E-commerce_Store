// src/components/Register.js

import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Register() {
  const { register } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    register(username, password);
    setUsername('');
    setPassword('');
    navigate('/login');
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="container">
      <div className="Register-div">
        <h2>Register</h2>
        <input
          className="div-text"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <div className="password-container">
          <input
            className="div-text"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle-icon" onClick={toggleShowPassword}>
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </span>
        </div>
        <br />
        <br />
        <button
          className="div-button"
          onClick={handleRegister}
          disabled={!username || !password}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
