import { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { User } from "./pages/User";

function App() {
  // Simulación de login: cambia a true para probar que funciona
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <nav style={{ padding: '20px', background: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '10px' }}> Inicio </Link>
        <Link to="/about" style={{ marginRight: '10px' }}> Sobre </Link>
        <Link to="/perfil-privado"> 🔐 Mi Perfil Privado </Link>
        
        {/* Botón para simular Login/Logout */}
        <button onClick={() => setIsAuth(!isAuth)} style={{ marginLeft: '20px' }}>
          {isAuth ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
      </nav>

      <main style={{ padding: '20px' }}>
        <p>Estado actual: <strong>{isAuth ? "Conectado ✅" : "Desconectado ❌"}</strong></p>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:username" element={<User />} />

          {/* RUTA PROTEGIDA */}
          <Route 
            path="/perfil-privado" 
            element={isAuth ? <h1>Bienvenido a tu zona privada</h1> : <Navigate to="/" />} 
          />
        </Routes>
      </main>
    </>
  );
}

export default App;