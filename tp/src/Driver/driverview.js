// src/App.js
import React, { useState } from 'react';
import Map from './map';
import DriverDetails from './driverdetail';
import './style.css';
import { Link } from 'react-router-dom';

const Driverview = () => {
  const [isochrone, setIsochrone] = useState(null);

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
          <Link to='/dash'>
          <img src="profile.jpg" alt="Profile Picture" className="profile-pic" />
          <span className="profile-name">Driver Name</span>
          </Link>
        </div>
      </header>
      <main>
        <div className="map-container">
          <Map location={{ lat: 51.505, lng: -0.09 }} isochrone={isochrone} />
        </div>
        <div className="details-container">
          <DriverDetails setIsochrone={setIsochrone} />
        </div>
      </main>

    </div>
  );
};

export default Driverview;
