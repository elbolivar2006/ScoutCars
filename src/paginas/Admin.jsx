import React, { useState, useEffect } from 'react';
import { products as productsIniciales } from '../components/ListaProductos';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin({ elementosCarrito = [], cambiarVista }) {
  const [productos, setProductos] = useState(() => {
    const guardados = localStorage.getItem('productosScoutCars');
    if (guardados) return JSON.parse(guardados);
    return productsIniciales;
  });

  const [form, setForm] = useState({ id: null, Nombre: '', Precio: '', img: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('productosScoutCars', JSON.stringify(productos));
  }, [productos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProductos(productos.map(p => p.id === form.id ? { ...form, Precio: Number(form.Precio) } : p));
      setIsEditing(false);
    } else {
      const nuevoProducto = {
        ...form,
        id: Date.now(),
        Precio: Number(form.Precio),
        img: form.img || 'src/assets/img/default.jpg'
      };
      setProductos([...productos, nuevoProducto]);
    }
    setForm({ id: null, Nombre: '', Precio: '', img: '' });
  };

  const handleEdit = (prod) => {
    setForm(prod);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este auto a escala del catálogo?')) {
      setProductos(productos.filter(p => p.id !== id));
    }
  };

  const productosFiltrados = productos.filter(p => 
    p.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cálculos conectados al carrito real
  const totalIngresosCarrito = elementosCarrito.reduce((acc, item) => acc + (item.Precio * item.cantidad), 0);
  const totalUnidadesCarrito = elementosCarrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block text-white sidebar collapse rounded p-3 mb-4">
          <h4 className="text-center py-2 text-uppercase fw-bold text-warning">ScoutCars Admin</h4>
          <hr className="bg-secondary" />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#dashboard" className="nav-link text-white active bg-primary rounded">📊 Dashboard & Ventas</a>
            </li>
            <li className="nav-item mb-2">
              <button 
                onClick={() => cambiarVista && cambiarVista('productos')} 
                className="nav-link text-white bg-transparent border-0 text-start w-100"
              >
                🚗 Catálogo de Autos
              </button>
            </li>
          </ul>
        </nav>

        {/* Contenido Principal */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 fw-bold text-dark">Panel de Control de Tienda y Catálogo</h1>
          </div>

          {/* Tarjetas de Estadísticas de Ventas en Vivo */}
          <div className="row text-white mb-4">
            <div className="col-md-4 mb-3">
              <div className="card bg-success p-3 shadow-sm border-0">
                <h5>Ingresos en Carritos Activos</h5>
                <h3>${totalIngresosCarrito.toLocaleString('es-CL')}</h3>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-primary p-3 shadow-sm border-0">
                <h5>Unidades en Carritos</h5>
                <h3>{totalUnidadesCarrito}</h3>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-dark p-3 shadow-sm border-0">
                <h5>Modelos en Catálogo</h5>
                <h3>{productos.length}</h3>
              </div>
            </div>
          </div>

          {/* Sección de Resumen de Carritos de Clientes (Conectado) */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">🛒 Productos Añadidos por Clientes (Monitoreo de Ventas en Vivo)</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Modelo a Escala</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementosCarrito.length > 0 ? (
                      elementosCarrito.map((item) => (
                        <tr key={item.id}>
                          <td className="fw-bold">{item.Nombre}</td>
                          <td>{item.cantidad}</td>
                          <td>${item.Precio.toLocaleString('es-CL')}</td>
                          <td className="fw-bold text-success">${(item.Precio * item.cantidad).toLocaleString('es-CL')}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-3 text-muted">No hay productos en los carritos en este momento.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Formulario para Agregar / Editar Modelos de Autos */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">{isEditing ? '✏️ Editar Vehículo' : '➕ Agregar Nuevo Auto al Catálogo'}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-5">
                  <label className="form-label">Nombre del Auto (Modelo)</label>
                  <input type="text" className="form-control" name="Nombre" value={form.Nombre} onChange={handleChange} required />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Precio ($)</label>
                  <input type="number" className="form-control" name="Precio" value={form.Precio} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Ruta de Imagen (ej: src/assets/img/...)</label>
                  <input type="text" className="form-control" name="img" value={form.img} onChange={handleChange} placeholder="src/assets/img/..." />
                </div>
                <div className="col-12 text-end">
                  {isEditing && (
                    <button type="button" className="btn btn-secondary me-2" onClick={() => { setIsEditing(false); setForm({ id: null, Nombre: '', Precio: '', img: '' }); }}>
                      Cancelar
                    </button>
                  )}
                  <button type="submit" className="btn btn-success px-4">{isEditing ? 'Actualizar Vehículo' : 'Guardar Vehículo'}</button>
                </div>
              </form>
            </div>
          </div>

          {/* Tabla de Inventario de Productos */}
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
              <h5 className="mb-0 fw-bold">Inventario de Autos a Escala</h5>
              <input 
                type="text" 
                className="form-control w-25" 
                placeholder="Buscar modelo..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>Vista Previa</th>
                      <th>Nombre / Modelo</th>
                      <th>Precio</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productosFiltrados.length > 0 ? (
                      productosFiltrados.map((prod) => (
                        <tr key={prod.id}>
                          <td>
                            <img src={prod.img} alt={prod.Nombre} style={{ width: '50px', height: '40px', objectFit: 'cover' }} className="rounded" onError={(e)=>{e.target.src='https://via.placeholder.com/50';}} />
                          </td>
                          <td className="fw-bold">{prod.Nombre}</td>
                          <td>${Number(prod.Precio).toLocaleString('es-CL')}</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(prod)}>✏️ Editar</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(prod.id)}>🗑️ Eliminar</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-muted">No se encontraron autos registrados.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}