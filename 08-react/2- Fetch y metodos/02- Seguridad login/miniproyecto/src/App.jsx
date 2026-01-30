import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { User } from './pages/User';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>Sobre Nosotros</Link>
          <Link to="/usuarios/samuel" style={{ marginRight: '10px' }}>Usuario Samuel</Link>
          <Link to="/perfil-privado" style={{ marginRight: '10px' }}>Mi perfil privado</Link>
          <button onClick={() => setIsAuth(!isAuth)}>
            {isAuth ? "Sesión cerrada" : "Sesión abierta"}
          </button>
        </nav>
      </div>

      <div>
        <main>
          <p>Estado actual: {isAuth ? "Conectado" : "Desconectado"}</p>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/usuarios/:username" element={<User />} />
            <Route
              path="/perfil-privado"
              element={
                isAuth ? <h1>Bienvenido a tu zona privada</h1> : <Navigate to="/" />
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
