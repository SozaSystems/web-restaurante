import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../../store/navigationSlice';
import logo from '../../assets/logo_valentino.webp';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <img src={logo} alt="Valentino Logo" className="hero-logo" />
                <p className="hero-subtitle">
                    Una experiencia gastronómica elegante con sabores inolvidables.
                </p>
                <a
                    href="https://wa.me/5493533402144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hero-btn"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    Reservar Mesa
                </a>
            </section>

            {/* Presentation Section */}
            <section className="presentation container">
                <p className="presentation-text">
                    En el corazón de Las Varillas, Valentino te ofrece una experiencia gastronómica completa donde la variedad y la calidad se encuentran. Un espacio donde cada plato cuenta una historia y cada visita se convierte en un momento especial.
                </p>
            </section>

            {/* History Section */}
            <section className="section-history">
                <div className="section-content">
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="history-text">
                        Fundado en 2010, Valentino comenzó como una pizzería artesanal, conquistando paladares con nuestras auténticas recetas italianas.
                        Con el tiempo, incorporamos la vibrante comida mexicana a nuestro menú, fusionando dos grandes tradiciones culinarias.
                        Hoy, hemos evolucionado hasta convertirnos en un restaurante completo, ofreciendo una amplia variedad de platos que van desde nuestras clásicas pizzas hasta sabores internacionales, sin perder nunca esa calidez y dedicación a la excelencia que nos caracteriza desde el primer día.
                    </p>
                </div>
            </section>

            {/* Quality & Dishes Section */}
            <section className="section-quality">
                <div className="section-content">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <p className="quality-text">
                        Disfruta de la experiencia Valentino donde prefieras.
                        Ya sea en nuestro elegante restaurante, en la comodidad de tu hogar o pasando a retirar tu pedido.
                    </p>

                    <div className="dishes-grid">
                        <div className="dish-card">
                            <h3 className="dish-title">Experiencia en el Local</h3>
                            <p>Disfruta de nuestra atención personalizada y ambiente acogedor con la mejor música y servicio.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Delivery</h3>
                            <p>Llevamos el sabor de Valentino directamente a tu puerta. Rápido, caliente y listo para disfrutar.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Take Away</h3>
                            <p>Pedí y retirá para disfrutar donde quieras. <strong>¡10% de descuento en toda tu compra!</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="cta-section">
                <h2 className="section-title" style={{ color: 'white' }}>Vive la Experiencia Valentino</h2>
                <div className="cta-buttons">
                    <button
                        onClick={() => {
                            dispatch(navigateTo('menu'));
                            window.scrollTo(0, 0);
                        }}
                        className="btn btn-cta btn-cta-outline"
                    >
                        Ver Menú
                    </button>
                    <a
                        href="https://wa.me/5493533402144"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta btn-cta-white"
                    >
                        Reservar Ahora
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
