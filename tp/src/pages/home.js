import React, { useState, useEffect } from 'react';

import RideDetails from './ridedetails';
import '../App.css';
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
import MapView from './map';
import axios from 'axios';
function Home() {

  const { userId } = useParams();
  const [OrderID, setOrderID] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);
  const [route, setRoute] = useState([]);
  return (
   
    <div>
    <header>
      <div className="logo">TP</div>
      <nav>
        <ul>
          <li><a href="#">Ride</a></li>
          <li><a href="#">Drive</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </nav>
      <div className="profile">
        <Link to='/profile'>
       <button> <img src="profile.jpg" alt="Profile Picture" className="profile-pic" /> </button>
        <span className="profile-name">Gabriel</span>
        </Link>
      </div>
    </header>
    <main>
      <div className="map-container">
        <MapView />
      </div>
      <div className="ride-details">
      <RideDetails setRoute={setRoute} />
      </div>
    </main>
    <footer>
      <p>&copy; </p>
    </footer>
  </div>
);
};


export default  Home;