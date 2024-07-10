import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('  http://localhost:5000/api/student/log-in', { email, password });
      setLoginStatus(`Login successful. Welcome, ${response.data.username}!`);
    } catch (error) {
      console.error('Error logging in: ', error);
      setLoginStatus('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      {loginStatus && <p className="status">{loginStatus}</p>}
    </div>
  );
};

export default Login;
