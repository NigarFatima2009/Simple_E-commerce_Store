// src/components/Register.js
import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const { register } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    register(username, password);
    setUsername('');
    setPassword('');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className='Register-div'>
        <h2>Register</h2>
        <input
          className="div-text"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          className="div-text"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
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
