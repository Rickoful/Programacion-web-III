import { db } from '../config/db.js';


    export const obtenerProd=async()=> {
        const [resultado] = await db.query('SELECT * FROM productos');
        return resultado;
  }

    export const CrearProd=async(producto)=> {
        const {nombre, precio, categoria}=producto ;
        const [resultado] = await db.query('INSERT INTO productos(nombre, precio, categoria) VALUES (?, ?, ?)',[nombre,precio,categoria]);
    return resultado;
  }

    export const encontrarProdPorId=async(id)=> {
    const [resultado] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    return resultado[0];
  }

    export const actualizarProd=async(nombre, precio, categoria,id)=> {
    const [resultado] = await db.query('UPDATE productos SET nombre=?, precio=?, categoria=? WHERE id=?',[nombre, precio, categoria, id]);
    return resultado;
  }

    export const eliminarProd =async(id)=> {
    await db.query('DELETE FROM productos WHERE id = ?', [id]);
    return true;
  }
