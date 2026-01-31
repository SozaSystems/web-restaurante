import React, { useState, useRef } from 'react';
import logo from '../../assets/vale2.webp';
import { menuData } from '../../data/menuData';
import './Menu.css';

const Menu = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const categoryRefs = useRef({});

    const toggleCategory = (id) => {
        const isOpening = openCategory !== id;
        setOpenCategory(openCategory === id ? null : id);

        // Scroll to category header when opening with offset for navbar
        if (isOpening && categoryRefs.current[id]) {
            setTimeout(() => {
                const element = categoryRefs.current[id];
                const navbarHeight = 80; // Approximate navbar height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    };
    return (
        <div className="menu-page container">
            <div className="menu-logo-container">
                <img src={logo} alt="Valentino" className="page-logo" />
            </div>
            <h1 className="text-center menu-title">Nuestro Menú</h1>

            <div className="menu-categories">
                {menuData.map((category) => (
                    <div
                        key={category.id}
                        className="menu-category"
                        ref={(el) => categoryRefs.current[category.id] = el}
                    >
                        <button
                            className={`category-header ${openCategory === category.id ? 'active' : ''}`}
                            onClick={() => toggleCategory(category.id)}
                        >
                            {category.title}
                            <span>{openCategory === category.id ? '−' : '+'}</span>
                        </button>

                        {openCategory === category.id && (
                            <div className="category-items">
                                <ul className="items-list">
                                    {category.items.map((item, index) => (
                                        <li key={index} className="menu-item">
                                            <div className="item-header">
                                                <h3 className="item-name">{item.name}</h3>
                                                <span className="item-price">{item.price}</span>
                                            </div>
                                            <p className="item-desc">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <p className="menu-disclaimer">* Precios publicados son para consumo en el local y para delivery</p>

            <div className="menu-promo">
                <p className="promo-text">🎉 ¡Aprovecha los beneficios de la compra en TAKE AWAY! 🎉</p>
            </div>

            
        </div>
    );
};

export default Menu;
