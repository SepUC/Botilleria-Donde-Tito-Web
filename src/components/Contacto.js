import React from 'react';
import { useContactValidation, ErrorMessage } from './ContactoLogic';

function Contacto() {
  // Usa el custom hook para la validación
  const { 
    formData, 
    errors, 
    handleSubmit, 
    handleChange 
  } = useContactValidation();

  return (
    <div>
      <h1>Contáctanos!</h1>
      <div className="container mt-3" style={{width: '30%', display: 'flex', justifyContent: 'center'}}>
        <form style={{width: '400px'}} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label"><strong>Nombre:</strong></label>
            <input 
              type="text" 
              className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
              id="nombre" 
              name="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              placeholder="José Luis" 
            />
            <ErrorMessage error={errors.nombre} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label"><strong>Teléfono:</strong></label>
            <input 
              type="tel" 
              className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
              id="telefono" 
              name="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+56 934 567 890" 
            />
            <ErrorMessage error={errors.telefono} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email:</strong></label>
            <input 
              type="email" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="joseluis@gaming.com" 
            />
            <ErrorMessage error={errors.email} />
          </div>
          
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label"><strong>Dirección:</strong></label>
            <input 
              type="text" 
              className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
              id="direccion" 
              name="direccion" 
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Av. Siempre Viva 742" 
            />
            <ErrorMessage error={errors.direccion} />
          </div>
          
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;