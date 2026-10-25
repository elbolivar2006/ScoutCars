import React from 'react';
import { products } from '../components/ListaProductos';
import Producto from '../components/Producto';

function Inicio({ alAgregar, cambiarVista }) {
  const destacados = products.slice(0, 4);

  return (
    <div>
      {/* Banner Superior Horizontal */}
     <section
    className="text-dark text-center py-3 mb-2"
    style={{ backgroundColor: '#ffffff' }}
    >
        <div className="container">
          <h1 className="titulo titulo-inicio fw-bold mb-3">
              Encuentra tu próximo auto de colección.
          </h1>
          <button 
            className="btn btn-scoutcars btn-lg mt-2"
            onClick={() => cambiarVista && cambiarVista('productos')}
          >
            Explorar catálogo completo
          </button>
        </div>
      </section>


{/* 4 Productos Destacados */}
      <div className="container mb-5">
        <div className="contdestacados">
          <h3 className="titulo-destacados mb-4">
            Productos Destacados
          </h3>

          <div className="row">
            {destacados.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <Producto
                  producto={item}
                  onAddToCart={alAgregar}
                />
              </div>
            ))}
          </div>
      </div>
    </div>
</div>
);
}


export default Inicio;