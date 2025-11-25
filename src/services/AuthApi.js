const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io";

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Returns user data and auth token
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
 * Store authentication token in localStorage
 * @param {string} token - Auth token
 */
export function setAuthToken(token) {
  localStorage.setItem('authToken', token);
}

/**
 * Get authentication token from localStorage
 * @returns {string|null} - Auth token or null
 */
export function getAuthToken() {
  return localStorage.getItem('authToken');
}

/**
 * Remove authentication token from localStorage
 */
export function removeAuthToken() {
  localStorage.removeItem('authToken');
}

/**
 * Store user data in localStorage
 * @param {object} user - User data
 */
export function setUserData(user) {
  localStorage.setItem('userData', JSON.stringify(user));
}

/**
 * Get user data from localStorage
 * @returns {object|null} - User data or null
 */
export function getUserData() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

/**
 * Remove user data from localStorage
 */
export function removeUserData() {
  localStorage.removeItem('userData');
}

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!getAuthToken();
}

/**
 * Logout user - clear all auth data
 */
export function logoutUser() {
  removeAuthToken();
  removeUserData();
}
