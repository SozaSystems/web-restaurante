import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData as initialMenuData, deliveryMenuData as initialDeliveryData } from '../../data/menuData';
import logo from '../../assets/vale2.webp';

const deepClone = (data) => JSON.parse(JSON.stringify(data));

const emptyItem = { name: '', description: '', price: '' };

const AdminPanel = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('menu');
    const [menuData, setMenuData] = useState(deepClone(initialMenuData));
    const [deliveryData, setDeliveryData] = useState(deepClone(initialDeliveryData));
    const [openCategories, setOpenCategories] = useState({});
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [addingItemTo, setAddingItemTo] = useState(null);
    const [newItem, setNewItem] = useState(emptyItem);
    const [addingCategory, setAddingCategory] = useState(false);
    const [newCategoryTitle, setNewCategoryTitle] = useState('');
    const [saveStatus, setSaveStatus] = useState(null);

    const currentData = activeTab === 'menu' ? menuData : deliveryData;
    const setCurrentData = activeTab === 'menu' ? setMenuData : setDeliveryData;

    const toggleCategory = (i) =>
        setOpenCategories((p) => ({ ...p, [i]: !p[i] }));

    // --- Categoría ---
    const saveCategory = () => {
        if (!editingCategory.title.trim()) return;
        setCurrentData((prev) => {
            const u = [...prev];
            u[editingCategory.index] = { ...u[editingCategory.index], title: editingCategory.title };
            return u;
        });
        setEditingCategory(null);
    };

    const deleteCategory = (i) => {
        if (!confirm('¿Eliminar esta categoría y todos sus platos?')) return;
        setCurrentData((prev) => prev.filter((_, idx) => idx !== i));
    };

    // --- Item ---
    const saveItem = () => {
        const { catIndex, itemIndex, name, description, price } = editingItem;
        if (!name.trim()) return;
        setCurrentData((prev) => {
            const u = deepClone(prev);
            u[catIndex].items[itemIndex] = { name, description, price };
            return u;
        });
        setEditingItem(null);
    };

    const deleteItem = (catIndex, itemIndex) => {
        if (!confirm('¿Eliminar este plato?')) return;
        setCurrentData((prev) => {
            const u = deepClone(prev);
            u[catIndex].items.splice(itemIndex, 1);
            return u;
        });
    };

    const saveNewItem = (catIndex) => {
        if (!newItem.name.trim()) return;
        setCurrentData((prev) => {
            const u = deepClone(prev);
            u[catIndex].items.push({ ...newItem });
            return u;
        });
        setAddingItemTo(null);
        setNewItem(emptyItem);
    };

    // --- Categoría nueva ---
    const saveNewCategory = () => {
        if (!newCategoryTitle.trim()) return;
        const id = newCategoryTitle.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        setCurrentData((prev) => [...prev, { id, title: newCategoryTitle, items: [] }]);
        setNewCategoryTitle('');
        setAddingCategory(false);
    };

    // --- Guardar ---
    // En localhost: simula el guardado (no hay Vercel Functions localmente)
    // En producción: llama a /api/save-menu → GitHub API → Vercel redeploya
    const handleSave = async () => {
        setSaveStatus('saving');
        const isLocalhost = import.meta.env.DEV;

        try {
            if (isLocalhost) {
                // Simulación local
                await new Promise((r) => setTimeout(r, 500));
                console.log('menuData (local):', JSON.stringify(menuData, null, 2));
                console.log('deliveryData (local):', JSON.stringify(deliveryData, null, 2));
            } else {
                // Producción: llamar a la Vercel Function
                const pwd = sessionStorage.getItem('tm_admin_pwd');
                const res = await fetch('/api/save-menu', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ adminPassword: pwd, menuData, deliveryData }),
                });
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.error || 'Error al guardar');
                }
            }
            setSaveStatus('success');
            setTimeout(() => setSaveStatus(null), 4000);
        } catch (err) {
            console.error('Error al guardar:', err.message);
            setSaveStatus('error');
            setTimeout(() => setSaveStatus(null), 4000);
        }
    };

    return (
        <div className="admin-panel">
            <header className="admin-header">
                <div className="admin-header-content">
                    <h1 className="admin-title">Panel de Administración</h1>
                    <button onClick={onLogout} className="admin-logout-btn">Cerrar sesión</button>
                </div>
            </header>

            <div className="admin-panel-logo-container">
                <Link to="/">
                    <img src={logo} alt="Valentino Logo" className="admin-panel-logo" title="Ir a la web principal" />
                </Link>
            </div>

            <div className="admin-tabs">
                <button className={`admin-tab ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => setActiveTab('menu')}>
                    Menú &nbsp; Local
                </button>
                <button className={`admin-tab delivery ${activeTab === 'delivery' ? 'active' : ''}`} onClick={() => setActiveTab('delivery')}>
                    Menú &nbsp; Delivery - Takeaway
                </button>
            </div>

            <div className="admin-content">
                {currentData.map((category, catIndex) => (
                    <div key={`${activeTab}-${catIndex}`} className="admin-category">
                        {/* Encabezado categoría */}
                        <div className={`admin-cat-header ${activeTab === 'delivery' ? 'is-delivery' : ''}`}>
                            {editingCategory?.index === catIndex ? (
                                <div className="admin-inline-edit">
                                    <input
                                        className="admin-input"
                                        value={editingCategory.title}
                                        autoFocus
                                        onChange={(e) => setEditingCategory((p) => ({ ...p, title: e.target.value }))}
                                        onKeyDown={(e) => e.key === 'Enter' && saveCategory()}
                                    />
                                    <button onClick={saveCategory} className="admin-btn-save-sm">✓</button>
                                    <button onClick={() => setEditingCategory(null)} className="admin-btn-cancel-sm">✕</button>
                                </div>
                            ) : (
                                <>
                                    <button className="admin-cat-toggle" onClick={() => toggleCategory(catIndex)}>
                                        <span className="admin-cat-arrow">{openCategories[catIndex] ? '▼' : '▶'}</span>
                                        <span className="admin-cat-title">{category.title}</span>
                                        <span className="admin-cat-count">({category.items.length} platos)</span>
                                    </button>
                                    <div className="admin-cat-actions">
                                        <button className="admin-btn-icon" title="Editar" onClick={() => setEditingCategory({ index: catIndex, title: category.title })}>✏️</button>
                                        <button className="admin-btn-icon admin-btn-danger" title="Eliminar" onClick={() => deleteCategory(catIndex)}>🗑️</button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Items */}
                        {openCategories[catIndex] && (
                            <div className="admin-items">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="admin-item">
                                        {editingItem?.catIndex === catIndex && editingItem?.itemIndex === itemIndex ? (
                                            <div className="admin-item-form">
                                                <div className="admin-form-row">
                                                    <label>Nombre</label>
                                                    <input className="admin-input" value={editingItem.name} onChange={(e) => setEditingItem((p) => ({ ...p, name: e.target.value }))} />
                                                </div>
                                                <div className="admin-form-row">
                                                    <label>Descripción</label>
                                                    <textarea className="admin-input admin-textarea" value={editingItem.description} onChange={(e) => setEditingItem((p) => ({ ...p, description: e.target.value }))} />
                                                </div>
                                                <div className="admin-form-row">
                                                    <label>Precio</label>
                                                    <input className="admin-input" value={editingItem.price} onChange={(e) => setEditingItem((p) => ({ ...p, price: e.target.value }))} />
                                                </div>
                                                <div className="admin-form-actions">
                                                    <button className="admin-btn-cancel" onClick={() => setEditingItem(null)}>Cancelar</button>
                                                    <button className="admin-btn-confirm" onClick={saveItem}>Guardar</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="admin-item-info">
                                                    <span className="admin-item-name">{item.name}</span>
                                                    <span className="admin-item-price">{item.price}</span>
                                                </div>
                                                <p className="admin-item-desc">{item.description}</p>
                                                <div className="admin-item-actions">
                                                    <button className="admin-btn-sm" onClick={() => { setEditingItem({ catIndex, itemIndex, ...item }); setAddingItemTo(null); }}>Editar</button>
                                                    <button className="admin-btn-sm admin-btn-sm-danger" onClick={() => deleteItem(catIndex, itemIndex)}>Eliminar</button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}

                                {/* Agregar plato */}
                                {addingItemTo === catIndex ? (
                                    <div className="admin-item admin-item-form">
                                        <div className="admin-form-row">
                                            <label>Nombre</label>
                                            <input className="admin-input" value={newItem.name} autoFocus onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))} placeholder="Nombre del plato" />
                                        </div>
                                        <div className="admin-form-row">
                                            <label>Descripción</label>
                                            <textarea className="admin-input admin-textarea" value={newItem.description} onChange={(e) => setNewItem((p) => ({ ...p, description: e.target.value }))} placeholder="Ingredientes o descripción" />
                                        </div>
                                        <div className="admin-form-row">
                                            <label>Precio</label>
                                            <input className="admin-input" value={newItem.price} onChange={(e) => setNewItem((p) => ({ ...p, price: e.target.value }))} placeholder="$0000" />
                                        </div>
                                        <div className="admin-form-actions">
                                            <button className="admin-btn-cancel" onClick={() => { setAddingItemTo(null); setNewItem(emptyItem); }}>Cancelar</button>
                                            <button className="admin-btn-confirm" onClick={() => saveNewItem(catIndex)}>Agregar</button>
                                        </div>
                                    </div>
                                ) : (
                                    <button className="admin-add-item-btn" onClick={() => { setAddingItemTo(catIndex); setEditingItem(null); }}>
                                        + Agregar plato
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {/* Nueva categoría */}
                {addingCategory ? (
                    <div className="admin-new-category">
                        <input
                            className="admin-input"
                            value={newCategoryTitle}
                            autoFocus
                            onChange={(e) => setNewCategoryTitle(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && saveNewCategory()}
                            placeholder="Nombre de la categoría"
                        />
                        <div className="admin-form-actions">
                            <button className="admin-btn-cancel" onClick={() => { setAddingCategory(false); setNewCategoryTitle(''); }}>Cancelar</button>
                            <button className="admin-btn-confirm" onClick={saveNewCategory}>Crear</button>
                        </div>
                    </div>
                ) : (
                    <button className="admin-add-cat-btn" onClick={() => setAddingCategory(true)}>
                        + Nueva categoría
                    </button>
                )}

                {/* Guardar */}
                <div className="admin-save-section">
                    {saveStatus === 'success' && (
                        <div className="admin-save-notice">
                            ✅ ¡Menú actualizado correctamente!
                        </div>
                    )}
                    {saveStatus === 'error' && (
                        <div className="admin-save-notice admin-save-error">❌ Error al guardar. Intentá de nuevo.</div>
                    )}
                    <button className="admin-save-btn" onClick={handleSave} disabled={saveStatus === 'saving'}>
                        {saveStatus === 'saving' ? '⏳ Guardando...' : '💾 Guardar cambios'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
