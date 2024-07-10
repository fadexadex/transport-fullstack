// src/components/DriverDetails.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DriverDetails = ({ setIsochrone }) => {
  const [location, setLocation] = useState('');

  const handleFindIsochrone = async (e) => {
    e.preventDefault();
    const coords = await geocode(location);

    if (coords) {
      const isochrone = await getIsochrone(coords);
      setIsochrone(isochrone);
    }
  };

  const geocode = async (location) => {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`);
    const data = response.data[0];
    return { lat: parseFloat(data.lat), lng: parseFloat(data.lon) };
  };

  const getIsochrone = async (coords) => {
    const apiKey = '8VBS34GxxskbykxPfxGdiuYD0yWIiEvLgAQtwdx5DxTFxWjhPxWQw1yVmQHp'; // Replace with your OpenRouteService API key
    const response = await axios.get(
      `https://api.openrouteservice.org/v2/isochrones/driving-car`,
      {
        params: {
          locations: `${coords.lng},${coords.lat}`,
          range: 600, // Travel time in seconds (10 minutes)
        },
        headers: {
          Authorization: apiKey,
        },
      }
    );
    return response.data;
  };

  return (
    <div className="driver-details">
      <form onSubmit={handleFindIsochrone}>
        <div className="input-group">
          <label htmlFor="location">Driver Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter driver location"
            required
          />
        </div>
        <button type="submit" className="ride-btn">Find Isochrone</button>
      </form>
    </div>
  );
};

export default DriverDetails;
