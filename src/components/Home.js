import React from 'react';

function Home() {
  return (
    <div className="container my-2">
      <div className="row align-items-start">
        {/* Warning image column */}
        <div className="col-md-3 d-flex justify-content-center">
          <img src="/assets/img/advertencia.png" alt="Advertencia" className="img-fluid" />
        </div>

        {/* Product cards column */}
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-4 mb-3">
              <a href="/detalle-cristal" className="card-link text-decoration-none">
                <div className="card h-100 clickable-card">
                  <img src="/assets/img/cristal.png" 
                       className="card-img-top" alt="Cristal" />
                  <div className="card-body">
                    <h5 className="card-title">Cristal</h5>
                    <p className="card-text">Cristal genérica.</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col-md-4 mb-3">
              <a href="#" className="card-link text-decoration-none" 
                 onClick={() => alert('deberia abrirse el detalle del producto aquí')}>
                <div className="card h-100 clickable-card">
                  <img src="/assets/img/mi.png" className="card-img-top" alt="Mistral Ice" />
                  <div className="card-body">
                    <h5 className="card-title">Mistral Ice</h5>
                    <p className="card-text">Mistral Ice genérica.</p>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="col-md-4 mb-3">
              <a href="#" className="card-link text-decoration-none" 
                 onClick={() => alert('deberia abrirse el detalle del producto aquí')}>
                <div className="card h-100 clickable-card">
                  <img src="/assets/img/vino_1.jpg" className="card-img-top" alt="Vino Tinto" />
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
  );
}

export default Home;