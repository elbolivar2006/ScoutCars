import React from 'react';
import { products } from '../components/ListaProductos';
import Producto from '../components/Producto';

function Inicio({ alAgregar, cambiarVista }) {
  const destacados = products.slice(0, 4);

  return (
    <div>
      {/* Banner Superior Horizontal */}
      <section className="bg-dark text-white text-center py-5 mb-4 rounded shadow">
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenido a ScoutCars</h1>
          <p className="lead fs-4">
            Descubre nuestra colección de autos a escala. Modelos exclusivos para coleccionar. 🚗🏁
          </p>
          <button 
            className="btn btn-danger btn-lg mt-2"
            onClick={() => cambiarVista && cambiarVista('productos')}
          >
            Explorar catálogo completo
          </button>
        </div>
      </section>

      {/* 4 Productos Destacados */}
      <div className="container mb-5">
        <h3 className="text-center mb-4">Productos Destacados</h3>
        <div className="row">
          {destacados.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <Producto producto={item} onAddToCart={alAgregar} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inicio;