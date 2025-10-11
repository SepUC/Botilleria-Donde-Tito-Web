import React from 'react';


function Contacto() {
  return (
    
    <div>
      <h1>Contáctanos!</h1>
      <div className="container mt-3" style={{width: '30%', display: 'flex', justifyContent: 'center'}}>
        <form style={{width: '400px'}}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label"><strong>Nombre:</strong></label>
            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="José Luis" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label"><strong>Teléfono:</strong></label>
            <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="+56 934 567 890" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email:</strong></label>
            <input type="email" className="form-control" id="email" name="email" placeholder="joseluis@gaming.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label"><strong>Direccion:</strong></label>
            <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Av. Siempre Viva 742" />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;