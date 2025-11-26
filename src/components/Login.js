import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, setAuthToken, setUserData } from '../services/AuthApi';

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

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
    if (password.length < 6) {
      return 'La contraseña debe tener al menos 6 caracteres';
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
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        password: validatePassword(value)
      }));
    }
  };

  // Maneja el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    setErrors({
      email: emailError,
      password: passwordError
    });
    
    // Limpiar error previo de login
    setLoginError('');
    
    // Si no hay errores de validación, proceder con el login
    if (!emailError && !passwordError) {
      setLoading(true);
      
      try {
        // Llamar al API de login
        const response = await loginUser(formData.email, formData.password);
        
        // Guardar el token y datos del usuario
        if (response.authToken) {
          setAuthToken(response.authToken);
        }
        
        // Guardar datos del usuario (sin el token)
        const userData = { ...response };
        delete userData.authToken;
        setUserData(userData);
        
        // Notificar al componente padre (App.js) del login exitoso
        if (onLoginSuccess) {
          onLoginSuccess(userData);
        }
        
        // Redirigir al home o dashboard
        navigate('/');
        
        // Opcional: mostrar mensaje de éxito
        console.log('Login exitoso:', userData);
        
      } catch (error) {
        // Mostrar error de autenticación
        setLoginError(error.message || 'Error al iniciar sesión. Por favor intenta de nuevo.');
        console.error('Error en login:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg" style={{backgroundColor: 'rgba(74, 47, 147, 0.95)', borderRadius: '15px'}}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{color: '#4f3161c1 !important'}}>Iniciar Sesión</h2>
              
              {/* Login Error Alert */}
              {loginError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Error:</strong> {loginError}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setLoginError('')}
                    aria-label="Close"
                  ></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
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
                      placeholder="Ingrese su contraseña"
                      autoComplete="current-password"
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

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    style={{
                      backgroundColor: '#4f3161b8',
                      borderColor: '#4f3161',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#6d4585')}
                    onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#4f3161a1')}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Ingresando...
                      </>
                    ) : (
                      'Ingresar'
                    )}
                  </button>
                </div>
              </form>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
