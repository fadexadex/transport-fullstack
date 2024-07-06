import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/login.css';

const DrvLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/driver/log-in', {
        email: email,
        password: password,
      });

      if (response.data) {
        // Store token or user data as needed
        // Example: localStorage.setItem('authToken', response.data.token);

        alert('Login successful!');
        // Redirect to dashboard
        navigate('/dash');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          <p>Email</p>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <div>
        <h3>Don't have an account?</h3>
        <Link to='/drv_reg'>
          <button>Driver Signup</button>
        </Link>
        <h3>Not a Driver?</h3>
        <Link to='/'>
          <button>User Login</button>
        </Link>
      </div>
    </div>
  );
}

export default DrvLogin;
