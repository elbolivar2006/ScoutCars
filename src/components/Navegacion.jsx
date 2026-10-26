import React from 'react';

function Navegacion({ cambiarVista, vista, totalItems = 0 }) {
  return (
    <nav className="navegacion">
      <a 
        href="#inicio" 
        onClick={(e) => { e.preventDefault(); cambiarVista('inicio'); }}
        className={vista === 'inicio' ? 'active' : ''}
      >
        Inicio
      </a>

      <a 
        href="#productos" 
        onClick={(e) => { e.preventDefault(); cambiarVista('productos'); }}
        className={vista === 'productos' ? 'active' : ''}
      >
        Productos
      </a>

      <a 
        href="#mi-cuenta" 
        onClick={(e) => { e.preventDefault(); cambiarVista('mi-cuenta'); }}
        className={vista === 'mi-cuenta' ? 'active' : ''}
      >
        Mi Cuenta
      </a>

      <a 
        href="#carrito" 
        onClick={(e) => { e.preventDefault(); cambiarVista('carrito'); }}
        className={vista === 'carrito' ? 'active' : ''}
      >
        🛒 Carrito {totalItems > 0 && <span className="badge bg-danger ms-1">{totalItems}</span>}
      </a>

      {/* Enlace integrado para el Panel de Administración */}
      <a 
        href="#admin" 
        onClick={(e) => { e.preventDefault(); cambiarVista('admin'); }}
        className={vista === 'admin' ? 'active text-warning fw-bold' : 'text-warning'}
      >
         Admin
      </a>
    </nav>
  );
}

export default Navegacion;