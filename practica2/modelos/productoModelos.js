import{db}from '../config/db.js';

export const insertarProducto = async (nombre, precio, stock, categoria_id) => {
  const [resultado] = await db.query('INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',[nombre, precio, stock, categoria_id]);
  return resultado;
};

export const obtenerTodosProductos = async () => {
  const [resultado] = await db.query('SELECT productos.*, categorias.nombre AS categoria FROM productos INNER JOIN categorias ON productos.categoria_id = categorias.id');
  return resultado;
};

export const obtenerProductoPorIdModel = async (id) => {
  const [resultado] = await db.query('SELECT productos.*, categorias.nombre AS categoria FROM productos INNER JOIN categorias ON productos.categoria_id = categorias.id WHERE productos.id = ?', [id]);
  return resultado;
};

export const actualizarProductoModel = async (nombre, precio, stock, categoria_id, id) => {
  const [resultado] = await db.query('UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=? WHERE id=?', [nombre, precio, stock, categoria_id, id]);
  return resultado;
};

export const actualizarStockModel = async (stock, id) => {
  const [resultado] = await db.query('UPDATE productos SET stock = stock + ? WHERE id = ?',[stock, id]);
  return resultado;
};
