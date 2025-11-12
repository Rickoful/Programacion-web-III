import {obtenerTodasCategorias,obtenerCategoriaPorIdModel,obtenerProductosPorCategoria,actualizarCategoriaModel,insertarCategoria,eliminarCategoriaModel} from '../modelos/categoriaModelos.js';

export const crearCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const resultado = await insertarCategoria(nombre, descripcion);
    res.json({ id: resultado.insertId, nombre, descripcion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerCategorias = async (req, res) => {
  try {
    const resultado = await obtenerTodasCategorias();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerCategoriaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtenerCategoriaPorIdModel(id);

    if (categoria.length === 0)
      return res.status(404).json({ mensaje: "Categoria no encontrada" });

    const productos = await obtenerProductosPorCategoria(id);
    res.json({ ...categoria[0], productos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    await actualizarCategoriaModel(nombre, descripcion, id);
    res.json({ mensaje: "Categoria actualizada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarCategoriaModel(id);
    res.json({ mensaje: "Categoria eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
