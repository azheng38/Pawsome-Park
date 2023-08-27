import React, { useState, useEffect } from 'react';
import './Checkbox.css';

export default function Checkbox ({grid, day}) {
    const [checked, setChecked] = React.useState(false);

    function handleChange(e) {
        setChecked(!checked);
    }

    return (
        <div>
            <input value = "test" type = "checkbox" onChange = {handleChange} />
            <h className='day-of-week'>{day}</h>
            <br></br>
            {checked ? (   
                <div className='grid-container'>
                    {grid.map((event, index) => (
                        <img className='event-image' key={index} src={event}/>
                    ))}
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
}