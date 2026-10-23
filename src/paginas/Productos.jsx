import ListaProductos from "../components/ListaProductos";

function Productos() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Catálogo de Productos - ScoutCars</h1>
      <ListaProductos />
    </div>
  );
}

export default Productos;