import React from 'react';
import HeroSection from '../HeroSection.js';
import Slideshow from '../Slideshow.js';
import './Home.css';
import Card from '../HomePage_Components/Cards.js';

export default function Home () {
    return (
        <div>
            <Slideshow></Slideshow>
            <h1 className='home-welcome'>WELCOME to</h1>
            <h2 className='pawsome-park'>Pawesome Park</h2>
            <Card/>
            <img src='./images/PawSome.png' style={{width: 200, height: 200}}></img>
        </div>
    )
};