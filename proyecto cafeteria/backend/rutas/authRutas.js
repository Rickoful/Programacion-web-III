import express  from 'express';
import { registrarUsuario, iniciarSesion } from '../controladores/authControlador.js';
const rutas = express.Router();
rutas.post('/registrar', registrarUsuario);
rutas.post('/login', iniciarSesion);
export default rutas;