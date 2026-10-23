import { useState } from 'react';
import Encabezado from "./components/Encabezado";
import Navegacion from "./components/Navegacion";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Micuenta from "./paginas/Micuenta";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [vista, setVista] = useState(() => {
    return localStorage.getItem('vistaActual') || 'inicio';
  });

  const cambiarVistaYGuardar = (nuevaVista) => {
    setVista(nuevaVista);
    localStorage.setItem('vistaActual', nuevaVista);
  };

  return (
    <div>
      <Encabezado />
      {/* Pasamos nuestra nueva función en lugar de setVista directo */}
      <Navegacion cambiarVista={cambiarVistaYGuardar} vista={vista} />

      {/* Renderizamos la vista correspondiente */}
      {vista === 'inicio' && <Inicio />}
      {vista === 'productos' && <Productos />}
      {vista === 'mi-cuenta' && <Micuenta />}
    </div>
  );
}

export default App;