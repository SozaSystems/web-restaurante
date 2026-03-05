import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/valenav.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {location.pathname === '/delivery' ? (
                    <div className="logo">
                        <img src={logo} alt="Valentino Logo" className="logo-img" />
                    </div>
                ) : (
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img src={logo} alt="Valentino Logo" className="logo-img" />
                    </Link>
                )}

                {location.pathname !== '/delivery' && (
                    <>
                        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-btn ${isActive ? 'active-link' : ''}`}
                                onClick={closeMenu}
                            >
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/menu"
                                className={({ isActive }) => `nav-btn ${isActive ? 'active-link' : ''}`}
                                onClick={closeMenu}
                            >
                                Menú
                            </NavLink>
                            <NavLink
                                to="/contacto"
                                className={({ isActive }) => `nav-btn ${isActive ? 'active-link' : ''}`}
                                onClick={closeMenu}
                            >
                                Contacto
                            </NavLink>
                        </div>

                        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
