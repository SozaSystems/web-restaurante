# 🍕 Restaurante - Valentino

> **Aplicación Web Moderna para Restaurante con Menú Interactivo.**

---

## 📖 Descripción
Este proyecto es una **Single Page Application (SPA)** diseñada para "Valentino", un restaurante ubicado en Las Varillas especializado en pizzas artesanales, comida mexicana y una amplia variedad de platos.
El diseño sigue una estética **Elegante y Moderna**, transmitiendo calidez y profesionalismo a través de una interfaz intuitiva, colores vibrantes y navegación fluida.

### Características Principales y Técnicas:
*   ✅ **Diseño Responsivo:** Se adapta perfectamente a móviles, tablets y escritorio.
*   ✅ **Navegación SPA:** Sistema de navegación sin recarga de página usando Redux Toolkit.
*   ✅ **Menú Interactivo:** Sistema de acordeón para explorar categorías y platos.
*   ✅ **Datos Separados:** Menú completo gestionado desde archivo de configuración independiente.
*   ✅ **Alta Performance:** Construido con Vite para carga instantánea y optimización de assets.
*   ✅ **Imágenes Optimizadas:** Uso de formato WebP para mejor rendimiento.
*   ✅ **Arquitectura React:** Uso de **Hooks** (`useState`, `useDispatch`, `useSelector`) y Redux para gestión de estado.
*   ✅ **WhatsApp Integration:** Botón flotante y enlaces directos para reservas y consultas.
*   ✅ **Google Maps:** Integración de mapa interactivo para ubicación del restaurante.

---

## 🛠️ Tecnologías Utilizadas

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   React 19
*   Redux Toolkit
*   Vite
*   Vercel

---

## 📂 Estructura del Proyecto

```bash
src/
├── 📂 assets/          # Imágenes optimizadas (WebP)
├── 📂 components/      
│   ├── 📂 Navbar/           # Navegación responsive con menú hamburguesa
│   ├── 📂 Footer/           # Pie de página con información del restaurante
│   ├── 📂 FloatingWhatsApp/ # Botón flotante de WhatsApp con animaciones
│   └── 📂 Layout/           # Estructura base de la aplicación
├── 📂 pages/           
│   ├── 📂 Home/             # Página principal con hero y presentación
│   ├── 📂 Menu/             # Menú interactivo con sistema de acordeón
│   └── 📂 Contact/          # Información de contacto y ubicación
├── 📂 store/           # Configuración de Redux (navegación)
├── 📂 data/            # Datos del menú (86 items en 15 categorías)
└── 📄 App.jsx          # Componente principal de la aplicación
```

---

## 🍽️ Categorías del Menú

El restaurante ofrece **15 categorías** con un total de **86 items**:

1. **Pizzas** (17 variedades) - Desde muzzarella clásica hasta especialidades con mariscos
2. **Nachos** (4 opciones) - Con queso, roquefort, napolitano y fugazzeta
3. **Tacos** (3 tipos) - De ternera, pollo y mixtos
4. **Pescados y Mariscos** (3 platos) - Rabas y tablas de frutos de mar
5. **Lomitos** (4 opciones) - Sandwiches y plato completo
6. **Milanesas** (5 variedades) - De ternera y pollo, sandwiches y platos
7. **Super Hamburguesas** (2 tipos) - Simple y completa
8. **Papas Fritas** (4 opciones) - Desde porción simple hasta cheddar completa
9. **Nuggets de Pollo** (2 tamaños) - 6 o 12 unidades con papas
10. **Variedades Mexicanas** (7 items) - Burritos, quesadillas, botanas y salsas
11. **Empanadas de la Casa** (5 sabores) - Cortada a cuchillo, matambre, árabe, osobucco y dulces
12. **Canastitas** (9 sabores) - Desde jamón y queso hasta champiñón
13. **Bebidas sin Alcohol** (4 opciones) - Agua y gaseosas en diferentes tamaños
14. **Cervezas** (11 marcas) - Bramah, Quilmes, Stella, Corona
15. **Vinos** (6 opciones) - Tintos y blancos

---

## 🔗 Visitar Sitio
Puedes ver el proyecto en funcionamiento aquí:
👉 **[valentinoweb.vercel.app](https://valentinoweb.vercel.app/)**

---

Hecho por **Jsoza**
