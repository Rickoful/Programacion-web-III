import { db } from '../config/db.js';

class Usuario {
  static async buscarPorEmail(email) {
    const [filas] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    return filas[0] || null;
  }

  static async crear(datos) {
    const { nombre_usuario, email, contrasena } = datos;
    const [resultado] = await db.execute(
      'INSERT INTO usuarios (nombre_usuario, email, contrasena) VALUES (?, ?, ?)',
      [nombre_usuario, email, contrasena]
    );
    return resultado.insertId;
  }
}

export default Usuario; 