import { useState } from 'react';
import { insertaProducto } from '../Servicios/Api.jsx';

export default function CrearProducto() {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.precio || !form.categoria) {
      alert("Todos los campos son obligatorios");
      return;
    }

    await API.post("/productos", form);
    alert("Producto creado");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Crear Producto</h2>

      <form onSubmit={enviar}>
        <label>Nombre:</label><br/>
        <input name="nombre" onChange={handleChange} /><br/>

        <label>Precio:</label><br/>
        <input name="precio" type="number" onChange={handleChange} /><br/>

        <label>Categoria:</label><br/>
        <input name="categoria" onChange={handleChange} /><br/>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
