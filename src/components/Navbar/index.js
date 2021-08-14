import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ScrollTrigger, Tween } from 'react-gsap'

import './styles.css';

function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    


    useEffect(() => {
        const menu = document.querySelector('.phone-menu__menu');
        const background = document.querySelector('.background-menu');
        if (!menuOpen) {
            background.className = `background-menu background-menu--disabled`;
            menu.className = `phone-menu__menu phone-menu__menu--close`;
        }
        else {
            menu.className = `phone-menu__menu phone-menu__menu--open`;
            background.className = `background-menu background-menu--active`;
        }
    }, [menuOpen])



    return (
        <ScrollTrigger start="0px" end="100px" scrub={0}>
            <Tween to={{css:{ className:"+=navbar navbar--sticky"}}}>
                <section className="navbar">
                    <nav className="phone-menu">
                        <h2 className="navbar__title">OnCryptos</h2>

                        <button className="phone-menu__button" onClick={() => setMenuOpen(!menuOpen)}>
                            <FontAwesomeIcon icon={!menuOpen ? faBars : faTimes} />
                        </button>

                        <div className="phone-menu__menu">
                            <ul className="phone-menu__links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#prices">Prices</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </div>
                    </nav>

                    <nav className="desk-menu">
                        <h2 className="navbar__title">OnCryptos</h2>

                        <ul className="navbar__links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#prices">Prices</a></li>
                            <li><a href="#about">About</a></li>
                        </ul>
                    </nav>

                    <div className="background-menu" onClick={() => setMenuOpen(!menuOpen)}></div>
                </section>
            </Tween>
        </ScrollTrigger>
    )
}

export default Navbar;