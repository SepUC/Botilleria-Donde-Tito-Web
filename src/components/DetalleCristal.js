import React from 'react';

function DetalleCristal() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1>Detalle del Producto</h1>
        </div>
      </div>
      
      <div className="product-card">
        <div className="card-image">
          <img src="/assets/img/cristal.png" alt="Cristal" />
        </div>
        
        <div className="card-text">
          <h2 className="card-title">Cristal</h2>
          <p><strong>Precio:</strong> $2.500 CLP</p>
          <p><strong>Descripción:</strong> Cerveza Cristal es una cerveza rubia de cuerpo liviano y sabor suave, perfecta para acompañar cualquier momento.</p>
          <p><strong>Contenido:</strong> 470cc</p>
          <p><strong>Graduación alcohólica:</strong> 4.6%</p>
          <p><strong>Origen:</strong> Chile</p>
          <p><strong>Disponibilidad:</strong> En stock</p>
          
          <button className="btn btn-primary mt-3">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default DetalleCristal;