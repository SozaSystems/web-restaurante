import React from 'react';
import logo from '../../assets/vale2.webp';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <div className="contact-logo-container">
                <img src={logo} alt="Valentino" className="page-logo" />
            </div>
            <h1 className="text-center contact-title">Contacto y Ubicación</h1>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-section">
                        <p className="info-text">Carlos Pellegrini 43</p>
                        <p className="info-text">Cordoba,&nbsp; Las varillas</p>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">Horarios</h2>
                        <p className="text-muted">Martes a Domingo: 19:00 - 01:00</p>
                        <p className="text-muted">Lunes: Cerrado</p>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">Contactanos</h2>
                        <p className="subtitle">Para reservas,&nbsp; delivery o take away</p>
                        <a
                            href="https://wa.me/5493533515989"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary whatsapp-btn"
                        >
                            WhatsApp: +54 9 353 351 5989
                        </a>
                    </div>

                    <div className="info-section">
                        <h2 className="info-title">¡Valóranos!</h2>
                        <p className="subtitle">Dejanos tu opinión en Google Maps</p>
                        <a
                            href="https://maps.app.goo.gl/aahYUjSEXYnQNQ5DA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary contact-btn"
                        >
                            Reseñas ⭐
                        </a>
                    </div>
                </div>

                <div className="map-placeholder">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.658943482418!2d-62.71939284743345!3d-31.871049731885023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb641316b76507%3A0xb1048bf657a61332!2sValentino!5e0!3m2!1ses-419!2sar!4v1769707957374!5m2!1ses-419!2sar"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Valentino"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
