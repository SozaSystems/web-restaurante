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
                    href="https://wa.me/1234567890"
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
                    Ubicado en Las Varillas, Valentino es tu destino para disfrutar de auténticas pizzas artesanales y deliciosa comida mexicana.
                    Nuestra amplia variedad de platos combina sabores tradicionales con recetas innovadoras, creando experiencias gastronómicas únicas.
                    Ven a descubrir por qué somos el lugar favorito de la ciudad para compartir buenos momentos alrededor de la mejor comida.
                </p>
            </section>

            {/* History Section */}
            <section className="section-history">
                <div className="section-content">
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="history-text">
                        Fundado en 1995, Valentino nació de la pasión por la auténtica cocina italiana y el deseo de crear un espacio donde cada comida se convierta en un recuerdo memorable.
                        A lo largo de los años, hemos perfeccionado nuestras recetas, mantenido intacta nuestra dedicación a la excelencia y crecido junto a nuestra comunidad de comensales.
                        Lo que comenzó como un pequeño bistro familiar se ha transformado en un referente de la gastronomía local, sin perder nunca esa calidez que nos caracteriza.
                    </p>
                </div>
            </section>

            {/* Quality & Dishes Section */}
            <section className="section-quality">
                <div className="section-content">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <p className="quality-text">
                        Disfruta de la experiencia Valentino donde prefieras.
                        Ya sea en nuestro elegante salón, en la comodidad de tu hogar o pasando a retirar tu pedido.
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
                            <p>Haz tu pedido y retíralo en el local sin esperas. Ideal para cuando estás de paso.</p>
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
                        href="https://wa.me/1234567890"
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
