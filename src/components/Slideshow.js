import React from 'react';
import './Slideshow.css';
import { useState, useEffect } from 'react';

const images = ["../images/image1.jpg","../images/image2.jpg"]

const delay = 5000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ), 
            delay
        );
        return () => {};
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image}></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;