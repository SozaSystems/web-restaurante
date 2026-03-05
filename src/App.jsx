import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import Contact from './pages/Contact/Contact';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
}

export default App;
