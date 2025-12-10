import express from 'express';
import cors from 'cors';
import productoRutas from './rutas/productoRutas.js';
import ordenarRutas from './rutas/ordenarRutas.js';
import authRutas from './rutas/authRutas.js';

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use('/api', productoRutas);
app.use('/api', ordenarRutas);
app.use('/api', authRutas);

const puerto = 4000;
app.listen(puerto, () =>
  console.log(`Servidor en http://localhost:${puerto}`)
);
