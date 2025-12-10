import { InsertarOrdenModel, ObtenerOrden,obtenerOrdenPorId } from '../modelos/ordenarModelos.js';

export const insertarOrden = async (req, res) => {
    try {
        const resultado = await InsertarOrdenModel(req.body);
        res.status(201).json(resultado);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const listaOrdenes = async (req, res) => {
    try {
        const resultado = await ObtenerOrden();
        res.json(resultado);
    } catch (error) {
        res.json({ error: error.message });
    }
};

export const obtenerOrden = async (req, res) => {
  try {
    const orden = await obtenerOrdenPorId(req.params.id);
    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });
    return res.json(orden);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
