import express from 'express';
import {crearCategoria,obtenerCategorias,obtenerCategoriaPorId,actualizarCategoria,eliminarCategoria} from '../controladores/categoriaControladores.js';

const rutas = express.Router();

rutas.post('/', crearCategoria);
rutas.get('/', obtenerCategorias);
rutas.get('/:id', obtenerCategoriaPorId);
rutas.put('/:id', actualizarCategoria);
rutas.delete('/:id', eliminarCategoria);

export default rutas;
