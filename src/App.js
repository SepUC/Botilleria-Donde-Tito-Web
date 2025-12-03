import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import de componentes
import Home from './components/Home';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import About from './components/About';
import Detalle from './components/Detalle';
import Login from './components/Login';

// Import de servicios de autenticación
import { isAuthenticated, getUserData, logoutUser } from './services/AuthApi';

function AppContent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Verificar si el usuario está autenticado al cargar
  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getUserData());
    }
  }, []);

  // Manejar logout
  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate('/');
  };

  return (
    <div className="App">
      {/* Logo Header */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src="/assets/img/LOGO_TEMP.png" alt="Logo" className="logo" />
        </div>

        {/* Navigation */}
        <nav className="navbar">
          <div className="container" style={{backgroundColor: 'rgb(7, 6, 80)'}}>
            <ul className="nav justify-content-center">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" 
                   role="button" data-bs-toggle="dropdown" aria-expanded="false" 
                   style={{color: '#7072e0'}}>
                  &#x22EE;
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/productos?categoria=vinos">Vinos</Link></li>
                  <li><Link className="dropdown-item" to="/productos?categoria=cervezas">Cervezas</Link></li>
                  <li><Link className="dropdown-item" to="/productos?categoria=licores">Licores</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Hogar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre nosotros</Link>
              </li>
              {!user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link" style={{color: '#9092ff'}}>
                      👤 {user.name || user.email}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button 
                      className="nav-link btn btn-link" 
                      onClick={handleLogout}
                      style={{color: '#ff7070', border: 'none', background: 'none'}}
                    >
                      Salir
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<About />} />
          <Route path="/producto/:id" element={<Detalle />} />
          <Route path="/login" element={<Login onLoginSuccess={(userData) => setUser(userData)} />} />
        </Routes>

      {/* Footer */}
      <p className="p1">Donde Tito ™</p>
      <footer className="footer">
        <p>Nombre del equipo &copy; 2025</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;