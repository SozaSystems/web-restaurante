import React, { useState, useEffect } from 'react';
import AdminPanel from './AdminPanel';
import './Admin.css';
import logo from '../../assets/vale2.webp';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('tm_admin_auth') === 'ok') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const isLocalhost = import.meta.env.DEV;

        try {
            if (isLocalhost) {
                // Solo en local: chequeo contra VITE_ADMIN_PASSWORD del .env.local
                // Esta variable NUNCA se configura en Vercel, solo existe en local
                const localPwd = import.meta.env.VITE_ADMIN_PASSWORD;
                if (!localPwd || password !== localPwd) {
                    throw new Error('Contraseña incorrecta.');
                }
            } else {
                // En producción: verificar contra el servidor (contraseña nunca en el bundle)
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ password }),
                });
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.error || 'Contraseña incorrecta.');
                }
            }

            // Login exitoso
            sessionStorage.setItem('tm_admin_auth', 'ok');
            sessionStorage.setItem('tm_admin_pwd', password); // para enviársela a /api/save-menu
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.message);
            setPassword('');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('tm_admin_auth');
        sessionStorage.removeItem('tm_admin_pwd');
        setIsLoggedIn(false);
        setPassword('');
    };

    if (isLoggedIn) return <AdminPanel onLogout={handleLogout} />;

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <img src={logo} alt="Valentino Logo" className="admin-login-logo" />
                <p className="admin-login-subtitle">Panel de Administración</p>
                <form onSubmit={handleLogin} className="admin-login-form">
                    <div className="admin-form-group">
                        <label htmlFor="admin-password">Contraseña</label>
                        <input
                            id="admin-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresá tu contraseña"
                            autoFocus
                            disabled={loading}
                        />
                    </div>
                    {error && <p className="admin-error">{error}</p>}
                    <button type="submit" className="admin-login-btn" disabled={loading}>
                        {loading ? 'Verificando...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
