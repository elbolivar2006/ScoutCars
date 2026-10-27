import React, { useState } from 'react';

function AgregarCarrito({ 
  elementosCarrito, 
  alEliminarDelCarrito, 
  alActualizarCantidad, 
  alVaciarCarrito, 
  alSeguirComprando 
}) {
  const [mostrarBoleta, setMostrarBoleta] = useState(false);
  const [numBoleta, setNumBoleta] = useState(null);
  const [fechaEmision, setFechaEmision] = useState('');

  const total = elementosCarrito.reduce(
    (acc, item) => acc + item.Precio * item.cantidad, 
    0
  );

  const neto = Math.round(total / 1.19);
  const iva = total - neto;

  const handleGenerarBoleta = () => {
    if (elementosCarrito.length === 0) return;

    setNumBoleta(Math.floor(100000 + Math.random() * 900000));
    setFechaEmision(new Date().toLocaleString('es-CL'));
    setMostrarBoleta(true);
  };

  const handleFinalizarYLimpiar = () => {
    setMostrarBoleta(false);
    alVaciarCarrito();
    alSeguirComprando();
  };

  return (
    <div className="container my-4 carrito-scoutcars">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {elementosCarrito.length === 0 ? (
        <div className="alert alert-info text-center">Tu carrito está vacío</div>
      ) : (
        <div className="row">
          <div className="col-md-8">
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
                {elementosCarrito.map((item) => (
                  <tr key={item.id}>
                    <td>{item.Nombre}</td>
                    <td>${item.Precio.toLocaleString('es-CL')}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-secondary me-1"
                        onClick={() => alActualizarCantidad(item.id, item.cantidad - 1)}
                      >-</button>
                      {item.cantidad}
                      <button 
                        className="btn btn-sm btn-outline-secondary ms-1"
                        onClick={() => alActualizarCantidad(item.id, item.cantidad + 1)}
                      >+</button>
                    </td>
                    <td>${(item.Precio * item.cantidad).toLocaleString('es-CL')}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => alEliminarDelCarrito(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm resumen-scoutcars">
              <h4>Resumen del Pedido</h4>
              <p>Productos: {elementosCarrito.reduce((acc, i) => acc + i.cantidad, 0)} unidades</p>
              <h3 className="total-scoutcars">${total.toLocaleString('es-CL')}</h3>

              <button 
                className="btn btn-scoutcars w-100 my-2"
                onClick={handleGenerarBoleta}
              >
                Generar Boleta / Pagar
              </button>
            </div>
          </div>
        </div>
      )}

      {mostrarBoleta && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content text-dark border-0 shadow-lg boleta-scoutcars">

              <div className="modal-header boleta-header p-4">
                <div className="w-100 d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="fw-bold mb-0 titulo-boleta">ScoutCars SpA</h3>
                    <small className="texto-boleta">Venta de Autos a Escala y Coleccionables</small><br />
                    <small className="texto-boleta">R.U.T.: 76.543.210-K — San Miguel, Santiago</small>
                  </div>
                  <div className="boleta-numero p-2 text-center rounded">
                    <span className="fw-bold d-block">BOLETA ELECTRÓNICA</span>
                    <span className="fw-bold">N° {numBoleta}</span>
                  </div>
                </div>
              </div>

              <div className="modal-body p-4">
                <div className="mb-3 text-muted small">
                  <strong>Fecha de Emisión:</strong> {fechaEmision}<br />
                  <strong>Sede:</strong> Tienda Online ScoutCars
                </div>

                <table className="table table-bordered table-sm mb-3">
                  <thead className="boleta-tabla">
                    <tr>
                      <th>Cant.</th>
                      <th>Detalle del Producto</th>
                      <th className="text-end">Precio Unit.</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elementosCarrito.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center">{item.cantidad}</td>
                        <td>{item.Nombre}</td>
                        <td className="text-end">${item.Precio.toLocaleString('es-CL')}</td>
                        <td className="text-end">${(item.Precio * item.cantidad).toLocaleString('es-CL')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="row justify-content-end">
                  <div className="col-md-5">
                    <div className="d-flex justify-content-between border-bottom py-1">
                      <span>Monto Neto:</span>
                      <span>${neto.toLocaleString('es-CL')}</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-1">
                      <span>I.V.A. (19%):</span>
                      <span>${iva.toLocaleString('es-CL')}</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold fs-5 pt-2 boleta-total">
                      <span>TOTAL:</span>
                      <span>${total.toLocaleString('es-CL')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer boleta-footer">
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={() => window.print()}
                >
                  🖨️ Imprimir / Guardar PDF
                </button>
                <button 
                  className="btn btn-scoutcars" 
                  onClick={handleFinalizarYLimpiar}
                >
                  Aceptar y Finalizar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgregarCarrito;