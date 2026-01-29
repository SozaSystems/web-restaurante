import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FloatingWhatsApp from '../FloatingWhatsApp/FloatingWhatsApp';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;
