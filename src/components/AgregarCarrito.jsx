import React from 'react';

function AgregarCarrito({ 
  elementosCarrito, 
  alEliminarDelCarrito, 
  alActualizarCantidad, 
  alVaciarCarrito,
  alSeguirComprando 
}) {
  const totalPrecio = elementosCarrito.reduce(
    (sum, item) => sum + (item.precio || item.Precio || 0) * item.cantidad, 
    0
  );

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛒 Carrito de Compras</h2>
        <button className="btn btn-scoutcars-outline" onClick={alSeguirComprando}>
          ← Seguir comprando
        </button>
      </div>

      {elementosCarrito.length === 0 ? (
        <div  className="alert text-center p-4 aviso-carrito-vacio">
          <h4>Tu carrito está vacío</h4>
          <p className="mb-3">Explora nuestro catálogo y agrega los mejores autos a escala.</p>
          <button className="btn btn-scoutcars" onClick={alSeguirComprando}>
            Ver Productos
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive bg-white rounded shadow-sm p-3 mb-3">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {elementosCarrito.map((item) => {
                    const nombre = item.nombre || item.Nombre || item.modelo;
                    const precio = item.precio || item.Precio || 0;
                    const img = item.img;

                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            {img && (
                              <img 
                                src={img} 
                                alt={nombre} 
                                style={{ width: '60px', height: '40px', objectFit: 'contain' }} 
                              />
                            )}
                            <span className="fw-bold">{nombre}</span>
                          </div>
                        </td>
                        <td>${precio.toLocaleString('es-CL')}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <button 
                              className="btn btn-sm btn-scoutcars-outline"
                              onClick={() => alActualizarCantidad(item.id, item.cantidad - 1)}
                            >
                              -
                            </button>
                            <span>{item.cantidad}</span>
                            <button 
                              className="btn btn-sm btn-scoutcars-outline"
                              onClick={() => alActualizarCantidad(item.id, item.cantidad + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(precio * item.cantidad).toLocaleString('es-CL')}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => alEliminarDelCarrito(item.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm p-3">
              <h4 className="card-title resumen-titulo pb-2">Resumen del Pedido</h4>
              <div className="d-flex justify-content-between my-2">
                <span>Productos:</span>
                <span>{elementosCarrito.reduce((acc, i) => acc + i.cantidad, 0)} unidades</span>
              </div>
              <div className="d-flex justify-content-between fw-bold fs-5 my-2">
                <span>Total:</span>
                <span style={{ color: '#850f1b' }}>{totalPrecio.toLocaleString('es-CL')}</span>
              </div>
              <button className="btn btn-scoutcars w-100 mt-3" onClick={() => alert('¡Compra procesada con éxito!')}>
                Finalizar Compra
              </button>
              <button className="btn btn-scoutcars-outline w-100 mt-2" onClick={alVaciarCarrito}>
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgregarCarrito;