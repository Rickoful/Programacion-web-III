import { useEffect, useState } from 'react';
import { obtOrdenes, obtProductos } from '../Servicios/Api.jsx';

export default function Ordenes() {
  const [ordenes, setOrdenes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  async function consulta() {
    const resOrdenes = await obtOrdenes();
    const resProductos = await obtProductos();

    setOrdenes(resOrdenes);
    setProductos(resProductos);
  };

  useEffect(() => {
    consulta();
  }, []);

  const agregarItem = (productoId) => {
    const producto = productos.find(p => p.id === parseInt(productoId));
    if (!producto) return;

    const nuevoItem = {
      id_producto: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    };

    setItems([...items, nuevoItem]);
    setTotal(total + producto.precio);
  };

  const crearOrden = async () => {
    if (items.length === 0) {
      alert("Debes agregar productos a la orden");
      return;
    }

    await crearOrden({
      total,
      items
    });

    alert("Orden creada correctamente");
    setItems([]);
    setTotal(0);
    consulta();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ordenes</h2>

      <h3>Crear nueva orden</h3>

      <select onChange={(e) => agregarItem(e.target.value)}>
        <option value="">Seleccione producto</option>
        {productos.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nombre} - {p.precio} Bs
          </option>
        ))}
      </select>

      <h4>Items:</h4>
      <ul>
        {items.map((i, index) => (
          <li key={index}>
            {i.nombre} × {i.cantidad} — {i.precio * i.cantidad} Bs
          </li>
        ))}
      </ul>

      <h3>Total: {total} Bs</h3>

      <button onClick={crearOrden}>Guardar Orden</button>

      <hr />

      <h2>Historial de Órdenes</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.total}</td>
              <td>{o.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
