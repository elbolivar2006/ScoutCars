import React from 'react';

function Producto({ producto, onAddToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={producto.img} 
        className="card-img-top" 
        alt={producto.Nombre} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.Nombre}</h5>
        <p className="card-text fw-bold text-success mb-3">
          ${producto.Precio.toLocaleString()}
        </p>
        
        {/* Botón para comprar o agregar al carro */}
        <button 
          className="btn btn-danger mt-auto" 
          onClick={() => onAddToCart(producto)}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}

export default Producto;