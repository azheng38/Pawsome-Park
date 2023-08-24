import React from 'react';
import './Slideshow.css';
import { useState, useEffect } from 'react';

const images = ["../images/slideshow-1.jpg",
    "../images/slideshow-2.jpg", 
    "../images/slideshow-3.jpg", 
    "../images/slideshow-4.jpg",
    "../images/slideshow-5.jpg",
    "../images/slideshow-6.jpg",
    "../images/slideshow-7.jpg",
    "../images/slideshow-8.jpg"
]

const delay = 6000;

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
                        <img src={image} alt="park image"></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;