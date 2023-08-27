import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox';
import './Volunteer.css';

function Volunteer() {
  const [days, setDays] = useState([]); // the days that the user wants to see for volunteer activities

  const mon = ['../images/Volunteer_garden.png', '../images/Volunteer_gate.png', '../images/Volunteer_clean.png'];
  const tue = ['../images/Volunteer_train.png', '../images/Volunteer_clean.png'];
  const wed = ['../images/Volunteer_garden.png', '../images/Volunteer_gate.png', '../images/Volunteer_train.png'];
  const thu = ['../images/Volunteer_garden.png', '../images/Volunteer_clean.png'];
  const fri = ['../images/Volunteer_gate.png', '../images/Volunteer_clean.png', '../images/Volunteer_event.png'];

  return (
    <div>
      <h2 style={{fontSize: 50}}>Click The Boxes to See What Opportunities Are Avaliable For Each Day!</h2>
      <br></br>
      <h2 style={{fontSize: 30}}>Contact us for more information!</h2>
      <div className='volunteer-container'>
        <Checkbox grid={mon} day='Monday' days={days}></Checkbox>
        <Checkbox grid={tue} day='Tuesday'></Checkbox>
        <Checkbox grid={wed} day='Wednesday'></Checkbox>
        <Checkbox grid={thu} day='Thursday'></Checkbox>
        <Checkbox grid={fri} day='Friday'></Checkbox>
      </div>  
    </div>
      
  );
}

export default Volunteer;
