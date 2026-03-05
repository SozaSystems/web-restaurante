// api/login.js — Vercel Serverless Function
// Verifica la contraseña del admin del lado del servidor.
// La contraseña nunca se expone en el bundle del frontend.

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { password } = req.body;

    if (!password || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Contraseña incorrecta.' });
    }

    return res.status(200).json({ success: true });
}
