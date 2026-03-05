// api/save-menu.js — Vercel Serverless Function
// Se ejecuta en el servidor: las variables de entorno son seguras aquí.

export default async function handler(req, res) {
    // Solo aceptar POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { adminPassword, menuData, deliveryData } = req.body;

    // Verificar contraseña del admin (del lado del servidor)
    if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'No autorizado' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = process.env.GITHUB_OWNER;
    const GITHUB_REPO = process.env.GITHUB_REPO;

    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
        return res.status(500).json({ error: 'Configuración de GitHub incompleta en las variables de entorno' });
    }

    const HEADERS = {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
    };

    // Función para actualizar un archivo en GitHub
    async function updateFile(path, newContent) {
        const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;

        // 1. Obtener el SHA actual del archivo (requerido por la API de GitHub)
        const getRes = await fetch(apiUrl, { headers: HEADERS });
        if (!getRes.ok) {
            const err = await getRes.json();
            throw new Error(`Error al leer ${path}: ${err.message}`);
        }
        const fileData = await getRes.json();

        // 2. Actualizar el archivo con el nuevo contenido
        const updateRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify({
                message: `✏️ Actualizar ${path} desde panel admin`,
                content: Buffer.from(newContent, 'utf8').toString('base64'),
                sha: fileData.sha,
            }),
        });

        if (!updateRes.ok) {
            const err = await updateRes.json();
            throw new Error(`Error al guardar ${path}: ${err.message}`);
        }

        return updateRes.json();
    }

    try {
        // Generar el contenido de los archivos JS
        const menuContent = `export const menuData = ${JSON.stringify(menuData, null, 2)};\n`;
        const deliveryContent = `export const deliveryMenuData = ${JSON.stringify(deliveryData, null, 2)};\n`;

        // Actualizar ambos archivos en GitHub (esto crea un commit por archivo)
        await updateFile('src/data/menuData.js', menuContent);
        await updateFile('src/data/deliveryMenuData.js', deliveryContent);

        return res.status(200).json({
            success: true,
            message: 'Menú actualizado. Vercel redesplegará en ~1 minuto.',
        });
    } catch (error) {
        console.error('Error en save-menu:', error.message);
        return res.status(500).json({ error: error.message });
    }
}
