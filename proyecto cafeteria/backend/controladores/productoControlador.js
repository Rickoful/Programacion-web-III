import { obtenerProd,actualizarProd,eliminarProd,CrearProd,encontrarProdPorId } from '../modelos/productosModelos.js';

export const obtener = async (req, res) => {
  try{
    const resultado = await obtenerProd();
  res.json(resultado);
}catch (error) {
        res.json({ error: error.message });
    }
};

export const insertar = async (req, res) => {
  try{
    const resultado = await CrearProd(req.body);
  res.status(201).json(resultado);
  }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtienePorID = async (req, res) => {
  try{
    const resultado = await encontrarProdPorId(req.params.id);
  res.json(resultado);
  }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualiza = async (req, res) => {
  try{
    const {id} = req.params;
    const {nombre,precio,categoria}=req.body;
    await actualizarProd(nombre,precio,categoria,id);
  res.json({message: "producto actualizado"});
  }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const elimina = async (req, res) => {
  try{ 
    await eliminarProd(req.params.id);
  res.json({ mensaje: 'Producto eliminado' });
  }catch (error) {
        res.status(500).json({ error: error.message });
    }
};
