import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/student/sign-up', {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      });

      if (response.data) {
        alert('Registration successful!');
        // Redirect to home page or another page
        navigate('/home');
      }
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <h1>User Registration</h1>
      <form onSubmit={handleRegister}>
        <label>First Name</label>
        <input placeholder="First Name" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <label>Last Name</label>
        <input placeholder="Last Name" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        <label>Email</label>
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input placeholder="Confirm Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
        <Link to='/'>
          <button>Login</button>
        </Link>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Student;
