# Implementación de Autenticación

## Resumen
Se ha implementado un sistema completo de autenticación conectado a la API de Xano.

## Archivos Creados/Modificados

### 1. `src/services/AuthApi.js` (NUEVO)
Servicio de autenticación con las siguientes funciones:
- `loginUser(email, password)` - Autenticar usuario
- `setAuthToken(token)` - Guardar token en localStorage
- `getAuthToken()` - Obtener token guardado
- `removeAuthToken()` - Eliminar token
- `setUserData(user)` - Guardar datos del usuario
- `getUserData()` - Obtener datos del usuario
- `removeUserData()` - Eliminar datos del usuario
- `isAuthenticated()` - Verificar si hay sesión activa
- `logoutUser()` - Cerrar sesión completa

### 2. `src/components/Login.js` (MODIFICADO)
Componente de login con:
- ✅ Validación de email y contraseña
- ✅ Integración con API de Xano
- ✅ Manejo de estados de carga
- ✅ Mensajes de error claros
- ✅ Toggle para mostrar/ocultar contraseña
- ✅ Redirección automática después del login
- ✅ Spinner de carga durante autenticación

### 3. `src/App.js` (MODIFICADO)
- ✅ Detección automática de sesión activa
- ✅ Navegación dinámica (Login vs Usuario + Salir)
- ✅ Muestra nombre o email del usuario logueado
- ✅ Botón de logout funcional
- ✅ Actualización del estado global al login/logout

## Endpoint API
```
POST https://x8ki-letl-twmt.n7.xano.io/api:vpx-imHN/auth/login

Body:
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}

Response (Éxito):
{
  "authToken": "token_string",
  "id": 123,
  "email": "usuario@ejemplo.com",
  "name": "Nombre Usuario",
  ... otros campos del usuario
}

Response (Error):
{
  "code": "ERROR_CODE_ACCESS_DENIED",
  "message": "Invalid Credentials."
}
```

## Cómo Probar

### 1. Probar Login
1. Iniciar la aplicación con `npm start`
2. Navegar a `/login` o hacer clic en "Login" en la navegación
3. Ingresar credenciales válidas de tu base de datos Xano
4. Presionar "Ingresar"
5. Si es exitoso, serás redirigido a la página principal
6. En la navegación verás tu nombre/email y un botón "Salir"

### 2. Verificar Persistencia
1. Después de hacer login, refresca la página (F5)
2. El usuario debe seguir autenticado (su nombre aparece en la navegación)
3. Los datos se guardan en localStorage del navegador

### 3. Probar Logout
1. Con sesión activa, hacer clic en el botón "Salir"
2. Serás redirigido a la página principal
3. La navegación volverá a mostrar "Login"
4. Los datos se eliminan de localStorage

### 4. Validaciones
- Intentar login con email inválido → muestra error de formato
- Intentar login con contraseña < 6 caracteres → muestra error
- Intentar login con credenciales incorrectas → muestra error de la API

## Características de Seguridad

✅ **Token Storage**: Los tokens se guardan en localStorage (para desarrollo)
✅ **Error Handling**: Mensajes claros para el usuario
✅ **Validation**: Validación frontend antes de llamar al API
✅ **Loading States**: Indicadores visuales durante operaciones asíncronas
✅ **Session Persistence**: La sesión persiste entre recargas de página

## Próximos Pasos (Opcional)

### Para Producción:
- [ ] Implementar refresh tokens
- [ ] Agregar timeout de sesión automático
- [ ] Proteger rutas que requieren autenticación
- [ ] Agregar página de registro (signup)
- [ ] Implementar recuperación de contraseña
- [ ] Mover tokens a httpOnly cookies (más seguro)
- [ ] Agregar 2FA (autenticación de dos factores)

### Features Adicionales:
- [ ] Página de perfil de usuario
- [ ] Edición de datos del usuario
- [ ] Historial de pedidos (si aplica)
- [ ] Carrito de compras con usuarios autenticados

## Estructura de localStorage

```javascript
// Después del login:
localStorage.authToken = "eyJhbGciOiJIUzI1NiIs..."
localStorage.userData = '{"id":123,"email":"user@example.com","name":"Usuario"}'
```

## Debugging

Si hay problemas con el login:
1. Abrir DevTools (F12) → Console
2. Verificar los logs de errores
3. Ir a Application → Local Storage → verificar authToken y userData
4. Network tab → verificar la respuesta del endpoint /auth/login

## Contacto con el Backend

El sistema está configurado para trabajar con:
- **Base URL**: `https://x8ki-letl-twmt.n7.xano.io`
- **Endpoint**: `/api:vpx-imHN/auth/login`
- **Method**: POST
- **Content-Type**: application/json
