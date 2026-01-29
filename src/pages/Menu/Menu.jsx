import React, { useState, useRef } from 'react';
import logo from '../../assets/logo_valentino.webp';
import { menuData } from '../../data/menuData';
import './Menu.css';

const Menu = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const categoryRefs = useRef({});

    const toggleCategory = (id) => {
        const isOpening = openCategory !== id;
        setOpenCategory(openCategory === id ? null : id);

        // Scroll to category header when opening
        if (isOpening && categoryRefs.current[id]) {
            setTimeout(() => {
                categoryRefs.current[id].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
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
        </div>
    );
};

export default Menu;
