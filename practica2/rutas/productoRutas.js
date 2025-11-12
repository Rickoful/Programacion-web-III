import express from 'express';
import {crearProducto,obtenerProductos,obtenerProductoPorId,actualizarProducto,actualizarStock} from '../controladores/productoControladores.js';

const rutas = express.Router();

rutas.post('/', crearProducto);
rutas.get('/', obtenerProductos);
rutas.get('/:id', obtenerProductoPorId);
rutas.put('/:id',actualizarProducto);
rutas.patch('/:id/stock', actualizarStock);

export default rutas;
