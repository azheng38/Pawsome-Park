import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.js';
import './Button.css';

function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Pawsome Park <i class='fa-solid fa-otter'/>
                    </Link>
                    <div className='menu-icon' onClick={handClick}>
                        <i className={ click ?  'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu gone'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/visit' className='nav-links' onClick={closeMobileMenu}>
                                Visit
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/exhibits' className='nav-links' onClick={closeMobileMenu}>
                                Exhibits
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>
                            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                    </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;