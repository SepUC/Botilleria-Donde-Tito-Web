import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser, setAuthToken, setUserData } from '../services/AuthApi';

function Register({ onRegisterSuccess }) {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

  // Validación de nombre
  const validateName = (name) => {
    if (!name) {
      return 'El nombre es requerido';
    }
    if (name.length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return '';
  };

  // Validación de email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'El email es requerido';
    }
    if (!emailRegex.test(email)) {
      return 'Por favor ingrese un email válido';
    }
    return '';
  };

  // Validación de contraseña
  const validatePassword = (password) => {
    if (!password) {
      return 'La contraseña es requerida';
    }
    if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    return '';
  };

  // Validación de confirmación de contraseña
  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) {
      return 'Por favor confirme su contraseña';
    }
    if (confirmPassword !== password) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  };

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validación en tiempo real
    let error = '';
    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'password':
        error = validatePassword(value);
        // También revalidar confirmPassword si ya tiene valor
        if (formData.confirmPassword) {
          setErrors(prev => ({
            ...prev,
            confirmPassword: validateConfirmPassword(formData.confirmPassword, value)
          }));
        }
        break;
      case 'confirmPassword':
        error = validateConfirmPassword(value, formData.password);
        break;
      default:
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Maneja el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password);
    
    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError
    });
    
    // Limpiar error previo de registro
    setRegisterError('');
    
    // Si no hay errores de validación, proceder con el registro
    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      setLoading(true);
      
      try {
        // Llamar al API de registro
        const response = await registerUser(formData.name, formData.email, formData.password);
        
        // Guardar el token y datos del usuario
        if (response.authToken) {
          setAuthToken(response.authToken);
        }
        
        // Guardar datos del usuario (sin el token)
        const userData = { ...response };
        delete userData.authToken;
        setUserData(userData);
        
        // Notificar al componente padre del registro exitoso
        if (onRegisterSuccess) {
          onRegisterSuccess(userData);
        }
        
        // Redirigir al home
        navigate('/');
        
        console.log('Registro exitoso:', userData);
        
      } catch (error) {
        // Mostrar error de registro
        setRegisterError(error.message || 'Error al registrar usuario. Por favor intenta de nuevo.');
        console.error('Error en registro:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg" style={{backgroundColor: 'rgba(74, 47, 147, 0.95)', borderRadius: '15px'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#4f3161c1 !important'}}>Crear Cuenta</h2>
              
              {/* Register Error Alert */}
              {registerError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Error:</strong> {registerError}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setRegisterError('')}
                    aria-label="Close"
                  ></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{color: '#333 !important'}}>
                    <strong>Nombre:</strong>
                  </label>
                  <input 
                    type="text" 
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{color: '#333 !important'}}>
                    <strong>Email:</strong>
                  </label>
                  <input 
                    type="email" 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{color: '#333 !important'}}>
                    <strong>Contraseña:</strong>
                  </label>
                  <div className="input-group">
                    <input 
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password" 
                      name="password" 
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mínimo 8 caracteres"
                      autoComplete="new-password"
                    />
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{borderColor: '#ced4da'}}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label" style={{color: '#333 !important'}}>
                    <strong>Confirmar Contraseña:</strong>
                  </label>
                  <div className="input-group">
                    <input 
                      type={showConfirmPassword ? "text" : "password"}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword" 
                      name="confirmPassword" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repite tu contraseña"
                      autoComplete="new-password"
                    />
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{borderColor: '#ced4da'}}
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    style={{
                      backgroundColor: '#4f3161',
                      borderColor: '#4f3161',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#6d4585')}
                    onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#4f3161')}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creando cuenta...
                      </>
                    ) : (
                      'Crear Cuenta'
                    )}
                  </button>
                </div>
              </form>
              
              <hr className="my-4" />
              
              <div className="text-center">
                <p style={{color: '#666', marginBottom: '10px'}}>¿Ya tienes una cuenta?</p>
                <Link 
                  to="/login"
                  className="btn btn-outline-secondary"
                  style={{
                    borderColor: '#4f3161',
                    color: '#4f3161'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#4f3161';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#4f3161';
                  }}
                >
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
