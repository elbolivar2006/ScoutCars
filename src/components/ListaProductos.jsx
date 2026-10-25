
import React from 'react';
import Producto from './Producto';

function ListaProductos({ onAddToCart, alAgregar }) {
  // Acepta tanto onAddToCart como alAgregar por flexibilidad
  const manejarAgregar = onAddToCart || alAgregar;

  return (
    <div className="container my-4">

      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Producto producto={item} onAddToCart={manejarAgregar} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;
export const products=[
    { id: 1, 
        Nombre: "BMW M3", 
        Precio: 25000, 
        img: 'src/assets/img/bmw_m3.jpg' 
    },
    { 
        id: 2, 
        Nombre: "Formula 1", 
        Precio: 25000, 
        img: 'src/assets/img/formula 1.jpg' 
    },
    { 
        id: 4, 
        Nombre: "Lamborghini", 
        Precio: 25000, 
        img: 'src/assets/img/Lamborghini.jpeg' 
    },
    { 
        id: 5, 
        Nombre: "Ferrari F70", 
        Precio: 35000, 
        img: 'src/assets/img/Ferrari1.jpg'
    },
    { 
        id: 6, 
        Nombre: "BMW M2", 
        Precio: 20000, 
        img: 'src/assets/img/bmwm2.jpg' 
    },
    { 
        id: 7, 
        Nombre: "Cadilla Escalade", 
        Precio: 28000, 
        img: 'src/assets/img/escalade.jpg' 
    },
    { 
        id: 8, 
        Nombre: "FORD F150", 
        Precio: 27000, 
        img: 'src/assets/img/F150.jpg' 
    },
    { 
        id: 9, 
        Nombre: "MERCEDES-BENZ CLE 53", 
        Precio: 23000,
        img: 'src/assets/img/mercedesbenz.jpg' 
    },
    { 
        id: 10, 
        Nombre: "BRABUS", 
        Precio: 21000, 
        img: 'src/assets/img/brabus.jpg' 
    },
    { 
        id: 11, 
        Nombre: "PORSHE 911", 
        Precio: 26500, 
        img: 'src/assets/img/991.JPG' 
    },
    { 
        id: 12, 
        Nombre: "bugatticentodieci", 
        Precio: 40000, 
        img: 'src/assets/img/bugatticentodieci.jpg' 
    },
    { 
        id: 13, 
        Nombre: "CHEVROLET CAMARO", 
        Precio: 15000, 
        img: 'src/assets/img/camaro.jpg' 
    }
];
