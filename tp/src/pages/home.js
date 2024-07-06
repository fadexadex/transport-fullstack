import React, { useState, useEffect } from 'react';

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

  return (
   
    <div className='Tp'>

             <div className='buttombar'>
       <input placeholder='From where?'className='from'></input>
       <input placeholder='To where?'className='to'></input>
       <a href='/'><button onClick={console.log(('HEllo world'))}>Search</button></a>
   </div>
    <div className="mid" >
       <input placeholder='search'className='sch'></input>
       <button>FIlter</button>
       <div className='driver'>
        <script src=''>
        </script>
        </div>
      
   
    </div>
    <div className='trip'>
    <p>OrderID: </p>
    <p>Currnt location: </p>
    <p>Destination: </p> 
    <div>Status</div>
     </div>

     <div className='trip1'>
    
    <p>OrderID: </p>
    <p>Currnt location: </p>
    <p>Destination: </p> 
    <div>Status</div>
     </div>
     <div className='trip2'>
    
    <p id='prv_order'>OrderID: </p>
    <p id='prv_loc'>Currnt location: </p>
    <p id='prv_dest'>Destination: </p> 
    <div>Status</div>
     </div>
    

    <div className='info'>
        <div className='driver_data'>
        <h1>{user.name}</h1>
      <p id='drv_name'>Driver Name: {user.name}</p>
      <p id=''>Phone Number: {user.phone}</p>
      <p>Car ID: {user.car}</p>
        </div>
     </div>
     <div className='Map'>
        <MapView/>
      </div>
     <div className='profile'>
      <Link to= '/profile'>
      
      <button onClick={console.log(('HEllo world'))} className='profile'>P</button>      </Link>
     
     </div>
    </div>
  );
}

export default  Home;