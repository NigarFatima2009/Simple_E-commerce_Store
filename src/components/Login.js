// src/components/Login.js
import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const { login } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <div className="container">
      <div className = "login-div">
        <h2>Login</h2>
        <input
          className="div-text1"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          className="div-text1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
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
