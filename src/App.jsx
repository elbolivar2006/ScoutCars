import { useState, useEffect } from 'react';
import Encabezado from "./components/Encabezado";
import Navegacion from "./components/Navegacion";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Micuenta from "./paginas/Micuenta";
import AgregarCarrito from "./components/AgregarCarrito";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [vista, setVista] = useState(() => {
    return localStorage.getItem('vistaActual') || 'inicio';
  });

  // Estado del carrito con persistencia en localStorage
  const [elementosCarrito, setElementosCarrito] = useState(() => {
    const guardado = localStorage.getItem('elementosCarrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('elementosCarrito', JSON.stringify(elementosCarrito));
  }, [elementosCarrito]);

  const cambiarVistaYGuardar = (nuevaVista) => {
    setVista(nuevaVista);
    localStorage.setItem('vistaActual', nuevaVista);
  };

  // Lógica de manipulación del carrito
  const manejarAgregarAlCarrito = (producto) => {
    setElementosCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    alert(`¡${producto.Nombre || producto.nombre} agregado al carrito!`);
  };

  const manejarEliminarDelCarrito = (id) => {
    setElementosCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const manejarActualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setElementosCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const manejarVaciarCarrito = () => setElementosCarrito([]);

  const totalItems = elementosCarrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div>
      <Encabezado />
      <Navegacion 
        cambiarVista={cambiarVistaYGuardar} 
        vista={vista} 
        totalItems={totalItems} 
      />

      {vista === 'inicio' && (
  <Inicio 
    alAgregar={manejarAgregarAlCarrito} cambiarVista={cambiarVistaYGuardar} 
  />)}
      {vista === 'productos' && <Productos alAgregar={manejarAgregarAlCarrito} />}
      {vista === 'mi-cuenta' && <Micuenta />}
      {vista === 'carrito' && (
        <AgregarCarrito
          elementosCarrito={elementosCarrito}
          alEliminarDelCarrito={manejarEliminarDelCarrito}
          alActualizarCantidad={manejarActualizarCantidad}
          alVaciarCarrito={manejarVaciarCarrito}
          alSeguirComprando={() => cambiarVistaYGuardar('productos')}
        />
      )}
    </div>
  );
}

export default App;