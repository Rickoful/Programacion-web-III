import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:4000/api'
});

export const obtProductos = async () => {
  const res = await API.get('/productos');
  return res.data;
};

export const obtProducto = async (id) => {
  const res = await API.get(`/productos/${id}`);
  return res.data;
};

export const insertaProducto = async (producto) => {
  const res = await API.post("/productos", producto);
  return res.data;
};

export const actualizaProducto = async (id, producto) => {
  const res = await API.put(`/productos/${id}`, producto);
  return res.data;
};

export const eliminaProducto = async (id) => {
  const res = await API.delete(`/productos/${id}`);
  return res.data;
};

export const obtOrdenes = async () => {
  const res = await API.get('/ordenes');
  return res.data;
};

export const obtOrden = async (id) => {
  const res = await API.get(`/ordenes/${id}`);
  return res.data;
};

export const insertaOrden = async (ordenes) => {
  const res = await API.post("/ordenes", ordenes);
  return res.data;
};

export const actualizaOrden = async (id, ordenes) => {
  const res = await API.put(`/ordenes/${id}`, ordenes);
  return res.data;
};

export const eliminaOrden = async (id) => {
  const res = await API.delete(`/ordenes/${id}`);
  return res.data;
};
export default API;
