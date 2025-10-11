import React from 'react';

function Productos() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1>Nuestros Productos</h1>
          <p className="lead"><strong>Placeholder:</strong> Aquí va la descripción general de los productos...</p>
        </div>
      </div>

      {/* Sección de Cervezas */}
      <div className="row mt-5">
        <div className="col-12">
          <h2>Cervezas</h2>
          <hr />
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/cristal.png" className="card-img-top" alt="Cristal" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Cristal</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción de la cerveza Cristal...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/mi.png" className="card-img-top" alt="Mistral Ice" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Mistral Ice</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción de Mistral Ice...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/austral.png" className="card-img-top" alt="Austral" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Austral</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción de Austral...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Vinos */}
      <div className="row mt-5">
        <div className="col-12">
          <h2>Vinos</h2>
          <hr />
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/vino_1.jpg" className="card-img-top" alt="Vino Tinto" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Vino Tinto</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del vino tinto...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/vino_blanco_casillero.png" className="card-img-top" alt="Vino Blanco" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Vino Blanco Casillero</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del vino blanco...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/vino_rosemaipo.png" className="card-img-top" alt="Vino Rosé" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Vino Rosemaipo</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del vino rosé...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Licores */}
      <div className="row mt-5">
        <div className="col-12">
          <h2>Licores</h2>
          <hr />
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/pisco.png" className="card-img-top" alt="Pisco" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Pisco</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del pisco...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/jack_daniels.png" className="card-img-top" alt="Jack Daniels" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Jack Daniels</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del whisky...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 clickable-card">
            <img src="/assets/img/placeholder.png" className="card-img-top" alt="Ron" 
                 style={{height: '200px', objectFit: 'cover'}} />
            <div className="card-body">
              <h5 className="card-title">Ron Placeholder</h5>
              <p className="card-text"><strong>Placeholder:</strong> Descripción del ron...</p>
              <p className="text-muted">Precio: $XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;