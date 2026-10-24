import ListaProductos from "../components/ListaProductos";

function Productos({ alAgregar }) {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Catálogo de Productos - ScoutCars</h1>
      {/* Le pasamos la función alAgregar a ListaProductos */}
      <ListaProductos onAddToCart={alAgregar} />
    </div>
  );
}

export default Productos;