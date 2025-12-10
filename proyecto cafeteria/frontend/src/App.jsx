import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './componentes/navbar.jsx';
import Home from './paginas/Home';
import Productos from './paginas/Productos';
import CrearProducto from './paginas/CrearProducto';
import Ordenes from './paginas/Ordenes';
import Login from './paginas/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/crear' element={<CrearProducto />} />
        <Route path='/ordenes' element={<Ordenes />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
