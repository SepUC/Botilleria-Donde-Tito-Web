import { useState } from 'react';

// Custom Hook para validación de formulario de contacto
export const useContactValidation = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: ''
  });

  const [errors, setErrors] = useState({});


  const limpiarErrores = () => {
    setErrors({});
  };


  const mostrarError = (campo, mensaje) => {
    setErrors(prev => ({
      ...prev,
      [campo]: mensaje
    }));
  };

  // Validación de nombre
  const validarNombre = (nombre) => {
    if (!nombre.trim()) {
      return 'El nombre es requerido';
    } else if (nombre.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return null;
  };

  // Validación de teléfono
  const validarTelefono = (telefono) => {
    if (!telefono.trim()) {
      return 'El teléfono es requerido';
    } else if (telefono.trim().length < 9) {
      return 'Formato de teléfono inválido';
    }
    return null;
  };

  // Validación de email
  const validarEmail = (email) => {
    if (!email.trim()) {
      return 'El email es requerido';
    } else if (!email.includes('@')) {
      return 'Formato de email inválido';
    }
    return null;
  };

  // Validación de dirección
  const validarDireccion = (direccion) => {
    if (!direccion.trim()) {
      return 'La dirección es requerida';
    } else if (direccion.trim().length < 5) {
      return 'La dirección debe tener al menos 5 caracteres';
    }
    return null;
  };

  // Función principal de validación
  const validarFormulario = () => {
    const newErrors = {};
    
    // Valida cada campo
    const nombreError = validarNombre(formData.nombre);
    const telefonoError = validarTelefono(formData.telefono);
    const emailError = validarEmail(formData.email);
    const direccionError = validarDireccion(formData.direccion);

    // Asigna errores si existen
    if (nombreError) newErrors.nombre = nombreError;
    if (telefonoError) newErrors.telefono = telefonoError;
    if (emailError) newErrors.email = emailError;
    if (direccionError) newErrors.direccion = direccionError;

    setErrors(newErrors);
    
    // Retorna true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e, onSuccess) => {
    e.preventDefault(); // Previene el envío del formulario
    
    if (validarFormulario()) {
      alert('¡Formulario enviado correctamente!');
      // Reinicia la forma de texto
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        direccion: ''
      });
      limpiarErrores();
      
      if (onSuccess) onSuccess(); // Callback opcional para acciones adicionales
    }
  };

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Función para resetear el formulario manualmente
  const resetForm = () => {
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      direccion: ''
    });
    limpiarErrores();
  };

  return {
    formData,
    errors,
    handleSubmit,
    handleChange,
    resetForm,
    limpiarErrores,
    validarFormulario,
    // Funciones individuales de validación para uso específico
    validarNombre,
    validarTelefono,
    validarEmail,
    validarDireccion
  };
};

// Componente opcional para mostrar errores (si prefieres componentizar)
export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="error-message text-danger small mt-1">
      {error}
    </div>
  );
};
