import express from 'express';
import productoRutas from './rutas/productoRutas.js'
import categoriaRutas from './rutas/categoriaRutas.js'
const app=express();
app.use(express.json())

app.use('/productos', productoRutas);
app.use('/categorias', categoriaRutas);

const puerto=3001;
app.listen(puerto,()=>{
    console.log(`Servidor en http://localhost:${puerto}`);
});