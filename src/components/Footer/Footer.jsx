import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Valentino. Todos los derechos reservados.
                </p>
                <p className="footer-text" style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>
                    Desarrollado por <a href="https://sozasystems.vercel.app/" target="_blank" rel="noopener noreferrer" className="soza-link">Soza Systems</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
