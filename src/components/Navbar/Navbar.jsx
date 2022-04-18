import React, { useState } from 'react';

import './Navbar.css';

import images from '../../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="app logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'>
                    <a href="#award">Home</a>
                </li>
                <li className='p__opensans'>
                    <a href="#award">about</a>
                </li>
                <li className='p__opensans'>
                    <a href="#award">menu</a>
                </li>
                <li className='p__opensans'>
                    <a href="#award">award</a>
                </li>
                <li className='p__opensans'>
                    <a href="#award">contact</a>
                </li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className='p__opensans'>Log In / Register</a>
                <div />
                <a href="/" className='p__opensans'>Book Table</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color='white' fontSize={27} onClick={() => { setToggleMenu(true) }} />
                {
                    toggleMenu && (
                        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />
                            <ul className='app__navbar-smallscreen_links'>

                                <li className='p__opensans'>
                                    <a href="#award">Home</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#award">About</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#menu">Menu</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#award">Award</a>
                                </li>
                                <li className='p__opensans'>
                                    <a href="#award">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;
