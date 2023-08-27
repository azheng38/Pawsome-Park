import React from 'react';
import { Button } from './Button.js';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection () {
    return (
        <div className='hero-container'>
            <h1>A PAWSOME TIME!</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    <Link to='/visit'>
                        VISIT
                    </Link>
                </Button>
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>
                    <Link to='/donate'>
                        DONATE
                    </Link>
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;