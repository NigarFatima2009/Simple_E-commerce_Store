// src/components/Login.js

import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const { login } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      setUsername('');
      setPassword('');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="container">
      <div className="login-div">
        <h2>Login</h2>
        <input
          className="div-text1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <div className="password-container">
          <input
            className="div-text1"
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
          className="div-button1"
          onClick={handleLogin}
          disabled={!username || !password}
        >
          Login
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
