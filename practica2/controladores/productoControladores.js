import {insertarProducto,obtenerTodosProductos,obtenerProductoPorIdModel,actualizarProductoModel,actualizarStockModel} from '../modelos/productoModelos.js';

export const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, stock, categoria_id } = req.body;
    const resultado = await insertarProducto(nombre, precio, stock, categoria_id);
    res.status(201).json({ id: resultado.insertId, nombre, precio, stock, categoria_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const resultado = await obtenerTodosProductos();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await obtenerProductoPorIdModel(id);

    if (resultado.length === 0)
      return res.status(404).json({ mensaje: "Producto no encontrado" });

    res.json(resultado[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, stock, categoria_id } = req.body;
    await actualizarProductoModel(nombre, precio, stock, categoria_id, id);
    res.json({ mensaje: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;
    await actualizarStockModel(stock, id);
    res.json({ mensaje: "stock actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
