import React from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../../store/navigationSlice';
import logo from '../../assets/vale2.webp';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <img src={logo} alt="Valentino Logo" className="hero-logo" />
                <p className="hero-subtitle">Pizza casera que une momentos.</p>
                <a
                    href="https://wa.me/5493533515989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary hero-btn"
                >
                    Reservar Mesa
                </a>
            </section>

            {/* Presentation Section
            <section>
                {/* <p className="presentation-text">
                    En el corazón de Las Varillas, Valentino te ofrece una experiencia gastronómica completa donde la variedad y la calidad se encuentran. Un espacio donde cada plato cuenta una historia y cada visita se convierte en un momento especial.
                </p> */}
            {/* </section> */}

            {/* History Section */}
            <section className="section-history">
                <div className="section-content">
                    <h2 className="section-title">Nuestra Historia</h2>
                    <p className="history-text">
                        Desde 2008, en Valentino hacemos pizzas con historia.
                        Nacimos con la idea de crear algo distinto en la ciudad, construyendo nuestro propio horno de barro y apostando por pizzas con un toque casero,&nbsp; único y familiar.
                        <br />
                        <br />
                        Fuimos pioneros incorporando sabores nuevos como tacos,&nbsp; nachos y canastitas, sin dejar de lado los clásicos, para armar una mesa pensada para todos los gustos.
                        Pero siempre hubo una protagonista: nuestra pizza, la estrella que nos dio identidad,&nbsp; crecimiento y visión.
                        <br />
                        <br />
                        Hoy vamos más allá del producto.
                        Creemos en los momentos compartidos, en el encuentro y en la experiencia.
                        Trabajamos cada día para mejorar la calidad y el disfrute de quienes nos eligen.
                        <br />
                        <br />
                        Valentino. Pizza,&nbsp; momentos y ganas de volver. 🍕❤️
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
                            <p>Disfruta de nuestra atención personalizada, ambiente acogedor con la mejor música y servicio.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Delivery</h3>
                            <p>Llevamos el sabor de Valentino directamente a tu puerta. Rápido, caliente y listo para disfrutar.</p>
                        </div>
                        <div className="dish-card">
                            <h3 className="dish-title">Take Away</h3>
                            <p>Pedí y retirá para disfrutar donde quieras. <strong>¡10<span style={{ fontFamily: 'sans-serif' }}>%</span> de descuento en toda tu compra!</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="cta-section">
                <h2 className="section-title cta-section-title">Vive la Experiencia Valentino</h2>
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
                        href="https://wa.me/5493533515989"
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
