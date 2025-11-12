import{db}from '../config/db.js';
export const insertarCategoria = async (nombre, descripcion) => {
  const [resultado] = await db.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',[nombre, descripcion]);
  return resultado;
};

export const obtenerTodasCategorias = async () => {
  const [resultado] = await db.query('SELECT * FROM categorias');
  return resultado;
};

export const obtenerCategoriaPorIdModel = async (id) => {
  const [resultado] = await db.query('SELECT * FROM categorias WHERE id = ?',[id]);
  return resultado;
};

export const obtenerProductosPorCategoria = async (id) => {
  const [resultado] = await db.query('SELECT * FROM productos WHERE categoria_id = ?',[id]);
  return resultado;
};

export const actualizarCategoriaModel = async (nombre, descripcion, id) => {
  const [resultado] = await db.query('UPDATE categorias SET nombre=?, descripcion=? WHERE id=?',[nombre, descripcion, id]);
  return resultado;
};

export const eliminarCategoriaModel = async (id) => {
  const [resultado] = await db.query('DELETE FROM categorias WHERE id=?',[id]);
  return resultado;
};
