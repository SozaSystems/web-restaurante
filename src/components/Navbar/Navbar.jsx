import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigateTo } from '../../store/navigationSlice';
import './Navbar.css';

import logo from '../../assets/logo_valentino.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentView = useSelector((state) => state.navigation.currentView);
    const dispatch = useDispatch();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (view) => {
        dispatch(navigateTo(view));
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>
                    <img src={logo} alt="Valentino Logo" className="logo-img" />
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <button
                        className={`nav-btn ${currentView === 'home' ? 'active-link' : ''}`}
                        onClick={() => handleNavigation('home')}
                    >
                        Inicio
                    </button>
                    <button
                        className={`nav-btn ${currentView === 'menu' ? 'active-link' : ''}`}
                        onClick={() => handleNavigation('menu')}
                    >
                        Menú
                    </button>
                    <button
                        className={`nav-btn ${currentView === 'contact' ? 'active-link' : ''}`}
                        onClick={() => handleNavigation('contact')}
                    >
                        Contacto
                    </button>

                </div>

                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
