import React from 'react';

function Navegacion({ cambiarVista, vista }) {
  return (
    <nav className="navegacion">
        {/* Usamos un botón o un enlace que evite el comportamiento por defecto */}
        <a href="#inicio" onClick={(e) => { e.preventDefault(); cambiarVista('inicio'); }}className={vista === 'inicio' ? 'active' : ''}>Inicio</a>
        <a href="#productos" onClick={(e) => { e.preventDefault(); cambiarVista('productos'); }}className={vista === 'productos' ? 'active' : ''}>Productos</a>
        <a href="#mi-cuenta" onClick={(e) => { e.preventDefault(); cambiarVista('mi-cuenta'); }}className={vista === 'mi-cuenta' ? 'active' : ''}>Mi Cuenta</a>
    </nav>
  );
}

export default Navegacion;