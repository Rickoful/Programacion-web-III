import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to='/' >Inicio</Link>
      <Link to='/productos'>Productos</Link>
      <Link to='/ordenes'>Ordenes</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
}
