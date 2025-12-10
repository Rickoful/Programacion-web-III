import { db } from '../config/db.js';

export const InsertarOrdenModel =  async ({ items }) => {
    if (!items || !Array.isArray(items) || items.length === 0) {
      throw new Error("items debe ser un arreglo no vacío");
    }

    let total = 0;
    const detalles = [];

    for (const it of items) {
      const productId = it.product_id ?? it.id ?? it.producto_id;
      const cantidad = Number(it.cantidad ?? 1);
      if (!productId) throw new Error("Cada item debe tener product_id");
      if (cantidad <= 0) throw new Error("cantidad debe ser >= 1");

      const [arrayNomPre] = await db.query('SELECT precio, nombre FROM productos WHERE id = ?', [productId]);
      if (!arrayNomPre || arrayNomPre.length === 0) {
        throw new Error(`Producto no encontrado: id=${productId}`);
      }
      const precio = Number(arrayNomPre[0].precio);
      const nombre = arrayNomPre[0].nombre;
      const subtotal = Number((precio * cantidad).toFixed(2));

      total += subtotal;

      detalles.push({
        product_id: productId,
        cantidad,
        precio,
        subtotal,
        nombre
      });
    }

    const [resultado] = await db.query('INSERT INTO ordenes(total) VALUES (?)',[total]);
    const orderId = resultado.insertId;

    for (const d of detalles) {
      await db.query('INSERT INTO detalle_orden (orden_id, producto_id, cantidad, subtotal) VALUES (?, ?, ?, ?)', [orderId, d.product_id, d.cantidad, d.subtotal]);
    }

    return { id: orderId, total: Number(total.toFixed(2)), items: detalles };
  }

  export const ObtenerOrden=async()=> {
    const [resultado] = await db.query('SELECT * FROM ordenes');
    return resultado;
  }

  export const obtenerOrdenPorId= async (orderId) => {
    const [ordenes] = await db.query('SELECT id, total, fecha FROM ordenes WHERE id = ?', [orderId]);
    if (!ordenes || ordenes.length === 0) return null;
    const orden = ordenes[0];

    const [items] = await db.query('SELECT d.id, d.orden_id, d.producto_id AS product_id, p.nombre, d.cantidad, d.subtotal FROM detalle_orden d JOIN productos p ON p.id = d.producto_id WHERE d.orden_id = ?',[orderId]);

    orden.items = items;
    return orden;
  }
