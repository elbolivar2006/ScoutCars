import ListaProductos from "../components/ListaProductos";

function Productos({ alAgregar }) {
  return (
    <div className="container my-4">
      <h1 className="titulo-catalogo text-start mb-4">Catálogo de Productos</h1>

      {/* Le pasamos la función alAgregar a ListaProductos */}
      <ListaProductos onAddToCart={alAgregar} />
    </div>
  );
}

export default Productos;