import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { login } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(username, password);
      setUsername('');
      setPassword('');
      navigate('/');
    } catch (err) {
      // Log the error to see its structure
      console.error('Login error:', err);
  
      // Check if the error message is 'Invalid credentials'
      if (err.response && err.response.data && err.response.data.message) {
        const errorMessage = err.response.data.message;
        if (errorMessage === 'Invalid credentials') {
          toast.error('Invalid credentials');
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error('An unexpected error occurred');
      }
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
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
