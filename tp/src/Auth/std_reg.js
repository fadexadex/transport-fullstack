import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import your CSS file

const Student = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [registerStatus, setRegisterStatus] = useState('');

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!avatar) {
      alert('Please upload an avatar.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    formData.append('avatar', avatar);

    try {
      const response = await axios.post('http://localhost:5000/api/student/sign-up', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setRegisterStatus(`Registration successful. Welcome, ${response.data.username}!`);
    } catch (error) {
      console.error('Error registering: ', error);
      setRegisterStatus('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            id="avatar"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
      {registerStatus && <p className="status">{registerStatus}</p>}
    </div>
  );
};

export default Student;
