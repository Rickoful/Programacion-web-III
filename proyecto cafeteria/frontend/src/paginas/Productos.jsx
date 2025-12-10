import { useEffect, useState } from "react";
import { obtProductos } from '../Servicios/Api.jsx';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [id, setID] = useState(0);
  async function consulta() {
    const resultado = await obtProductos();
    setProductos(resultado);
  };

  useEffect(() => {
    consulta();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Listado de Productos</h2>
      <a href="/productos/crear">Crear Producto</a>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Productos;