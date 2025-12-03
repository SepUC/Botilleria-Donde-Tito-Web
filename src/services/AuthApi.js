const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io";

/**
 * Inicio de sesión con email y password
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} - Devuelve los datos del usuario y el token de autenticación
 */
export async function loginUser(email, password) {
  const url = `${BASE_URL}/api:vpx-imHN/auth/login`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    
    const data = await response.json();
    
    // Si la respuesta no es OK, lanzar error con el mensaje del servidor
    if (!response.ok) {
      throw new Error(data.message || 'Error al iniciar sesión');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Almacena el token de autenticación en localStorage
 * @param {string} token - Token de autenticación
 */
export function setAuthToken(token) {
  localStorage.setItem('authToken', token);
}

/**
 * Token de autenticación desde localStorage
 * @returns {string|null} - Token de autenticación o null
 */
export function getAuthToken() {
  return localStorage.getItem('authToken');
}

/**
 * Quitar token de autenticación de localStorage
 */
export function removeAuthToken() {
  localStorage.removeItem('authToken');
}

/**
 * Almacena los datos del usuario en localStorage
 * @param {object} user - Datos del usuario
 */
export function setUserData(user) {
  localStorage.setItem('userData', JSON.stringify(user));
}

/**
 * Usa los datos del usuario desde localStorage
 * @returns {object|null} - Datos del usuario o null
 */
export function getUserData() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

/**
 * Quita los datos del usuario de localStorage
 */
export function removeUserData() {
  localStorage.removeItem('userData');
}

/**
 * Revisa si el usuario está auntenticado
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!getAuthToken();
}

/**
 * Cierra sesión del usuario - limpia todos los datos de autenticación
 */
export function logoutUser() {
  removeAuthToken();
  removeUserData();
}
