import React from 'react';
import './Tour.css';

export default function Tour () {
    return (
        <div>
          <h1 className='heading'>Pawsome Adventure!</h1>
          <p className="paragraph">Join us on this beautiful train ride around the park</p>
          <div className="video-container">
            <video controls width="700">
                <source src="/trainVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
}