import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import Usuario from '../modelos/Usuario.js'; 

function evaluarFortaleza(contrasena) {
  if (contrasena.length < 8) return 'débil';
  const tieneMayus = /[A-Z]/.test(contrasena);
  const tieneMinus = /[a-z]/.test(contrasena);
  const tieneNumero = /\d/.test(contrasena);
  return (tieneMayus && tieneMinus && tieneNumero) ? 'fuerte' : 'débil';
}

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre_usuario, email, contrasena } = req.body;

    const fortaleza = evaluarFortaleza(contrasena);
    if (fortaleza === 'débil') {
      return res.status(400).json({
        error: 'La contraseña es demasiado débil. Debe tener al menos 8 caracteres, mayúsculas, minúsculas y números.'
      });
    }

    const usuarioExistente = await Usuario.buscarPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    const saltos = await bcrypt.genSalt(10);
    const contrasenaEncriptada = await bcrypt.hash(contrasena, saltos);

    await Usuario.crear({
      nombre_usuario,
      email,
      contrasena: contrasenaEncriptada
    });

    res.status(201).json({ mensaje: '¡Usuario registrado exitosamente!' });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

export const iniciarSesion = async (req, res) => {
  try {
    const { email, contrasena } = req.body;

    const usuario = await Usuario.buscarPorEmail(email);
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!esValida) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    const token = jwt.sign(
      { 
        id: usuario.id, 
        nombre_usuario: usuario.nombre_usuario, 
        email: usuario.email 
      },
      process.env.JWT_SECRET || 'mi_clave_secreta_muy_segura',
      { expiresIn: '1h' }
    );

    res.json({
      mensaje: '¡Inicio de sesión exitoso!',
      token,
      usuario: {
        id: usuario.id,
        nombre_usuario: usuario.nombre_usuario,
        email: usuario.email
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};