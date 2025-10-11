import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import de componentes
import Home from './components/Home';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import About from './components/About';
import DetalleCristal from './components/DetalleCristal';

function App() {
  return (
    <Router>
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
                  <li><a className="dropdown-item" href="#">Vinos</a></li>
                  <li><a className="dropdown-item" href="#">Cervezas</a></li>
                  <li><a className="dropdown-item" href="#">Licores</a></li>
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
            </ul>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<About />} />
          <Route path="/detalle-cristal" element={<DetalleCristal />} />
        </Routes>

        {/* Footer */}
        <p className="p1">Donde Tito ™</p>
        <footer className="footer">
          <p>Nombre del equipo &copy; 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
