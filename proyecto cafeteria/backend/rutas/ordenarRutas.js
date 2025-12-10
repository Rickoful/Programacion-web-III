import express from 'express';
import { insertarOrden, listaOrdenes,obtenerOrden } from '../controladores/ordenarControlador.js';

const rutas = express.Router();

rutas.post('/ordenes', insertarOrden);
rutas.get('/ordenes', listaOrdenes);
rutas.get('/ordenes/:id', obtenerOrden);

export default rutas;
