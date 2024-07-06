import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Driver = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [carType, setCarType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maxPassengers, setMaxPassengers] = useState(4);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/driver/sign-up', {
        first_name: firstname,
        last_name: lastname,
        email: email,
        car_type: carType,
        password: password,
        phone_number: phoneNumber,
        max_passengers: maxPassengers,
      });

      if (response.data) {
        alert('Registration successful!');
        // Redirect to dashboard
        navigate('/dash');
      }
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Driver Registration</h1>
      <form onSubmit={handleRegister}>
        <label>First Name</label>
        <input placeholder="First Name" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
        
        <label>Last Name</label>
        <input placeholder="Last Name" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
        
        <label>Email</label>
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        
        <label>Car Type</label>
        <input placeholder="Car Type" type="text" value={carType} onChange={(e) => setCarType(e.target.value)} required/>
        
        <label>Phone Number</label>
        <input placeholder="Phone Number" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
        
        <label>Max Passengers</label>
        <input placeholder="Max Passengers" type="number" value={maxPassengers} onChange={(e) => setMaxPassengers(e.target.value)} required/>
        
        <label>Password</label>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        
        <label>Confirm Password</label>
        <input placeholder="Confirm Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Register</button>
        <Link to='/'>
          <button>Login</button>
        </Link>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Driver;
