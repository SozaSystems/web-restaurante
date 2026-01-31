import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Valentino. &nbsp; Todos los derechos reservados.
                </p>
                <p className="footer-text footer-dev">
                    Desarrollado por &nbsp; <a href="https://sozasystems.vercel.app/" target="_blank" rel="noopener noreferrer" className="soza-link">Soza Systems</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
