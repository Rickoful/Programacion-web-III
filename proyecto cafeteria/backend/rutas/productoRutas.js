import express from 'express';
import { obtener,insertar,actualiza,obtienePorID,elimina } from '../controladores/productoControlador.js';

const rutas = express.Router();

rutas.get('/productos', obtener);
rutas.post('/productos', insertar);
rutas.get('/productos/:id', obtienePorID);
rutas.put('/productos/:id', actualiza);
rutas.delete('/productos/:id', elimina);

export default rutas;
