import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="assets/css.css" />
      
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src="assets/img/LOGO_TEMP.png" alt="Logo" className="logo" />
      </div>

      <nav className="navbar"> 
        <div className="container" style={{backgroundColor: "rgb(7, 6, 80)"}}>            
          <ul className="nav justify-content-center">
            {/* Sección dropdown para expansión de menú con bootstrap */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#7072e0"}}>
                &#x22EE;
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Vinos</a></li>
                <li><a className="dropdown-item" href="#">Cervezas</a></li>
                <li><a className="dropdown-item" href="#">Licores</a></li>
              </ul>
            </li>                
            <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
            <li className="nav-item"><a className="nav-link" href="productos.html">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="about.html">Sobre nosotros</a></li>
          </ul>
        </div>
      </nav>

      <div className="container my-2">
        <div className="row align-items-start">
          <div className="col-md-3 d-flex justify-content-center">
            <img src="assets/img/advertencia.png" alt="Advertencia" className="img-fluid" />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-3">
                <a href="detalle_cristal.html" className="card-link text-decoration-none">
                  <div className="card h-100 clickable-card">
                    <img src="https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/23076074/1x-cristal-46-lata-470cc.jpg?1746722758" 
                         className="card-img-top" alt="Cristal" style={{height: "200px", objectFit: "cover"}} />
                    <div className="card-body">
                      <h5 className="card-title">Cristal</h5>
                      <p className="card-text">Cristal genérica.</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="col-md-4 mb-3">
                <a href="#" className="card-link text-decoration-none" onClick={() => alert('deberia abrirse el detalle del producto aquí')}>
                  <div className="card h-100 clickable-card">
                    <img src="assets/img/mi.png" className="card-img-top" alt="Mistral Ice" 
                         style={{height: "200px", objectFit: "cover"}} />
                    <div className="card-body">
                      <h5 className="card-title">Mistral Ice</h5>
                      <p className="card-text">Mistral Ice genérica.</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="col-md-4 mb-3">
                <a href="#" className="card-link text-decoration-none" onClick={() => alert('deberia abrirse el detalle del producto aquí')}>
                  <div className="card h-100 clickable-card">
                    <img src="assets/img/vino_1.jpg" className="card-img-top" alt="Vino Tinto" 
                         style={{height: "200px", objectFit: "cover"}} />
                    <div className="card-body">
                      <h5 className="card-title">Vino Tinto</h5>
                      <p className="card-text">Vino Gato.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="p1"> Donde Tito ™</p>
      <footer className="footer">
        <p>Nombre del equipo &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
