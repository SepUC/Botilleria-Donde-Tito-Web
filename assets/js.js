// Validación de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); //DOM - Selecciona la info desde los formatos form
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío del formulario para que el código pueda funcionar

            const nombre = document.getElementById('nombre');
            const telefono = document.getElementById('telefono');
            const email = document.getElementById('email');
            const direccion = document.getElementById('direccion');
            
            // Reinicia los mensajes de errores
            limpiarErrores();
            
            let isValid = true;
            let errorMessages = [];
            
            // Valida nombre
            if (!nombre.value.trim()) { // Trim remueve espacios y verifica si está en blanco, ! muestra diferente de
                mostrarError(nombre, 'El nombre es requerido');
                isValid = false;
            } else if (nombre.value.trim().length < 2) {
                mostrarError(nombre, 'El nombre debe tener al menos 2 caracteres');
                isValid = false;
            }
            
            // Valida teléfono
            if (!telefono.value.trim()) {
                mostrarError(telefono, 'El teléfono es requerido');
                isValid = false;
            } else if (!/^\+?[0-9\s\-]{8,15}$/.test(telefono.value.trim())) {  // Validación de formato de teléfono
                isValid = false;
                mostrarError(telefono, 'Formato de teléfono inválido');
            }
            
            // Validación email
            if (!email.value.trim()) {
                mostrarError(email, 'El email es requerido');
                isValid = false;
            } else if (!email.value.includes('@')) { //Si no incluye @
                mostrarError(email, 'Formato de email inválido');
                isValid = false;
            }
            
            // Valida dirección
            if (!direccion.value.trim()) {
                mostrarError(direccion, 'La dirección es requerida');
                isValid = false;
            } else if (direccion.value.trim().length < 5) {
                mostrarError(direccion, 'La dirección debe tener al menos 5 caracteres');
                isValid = false;
            }
            
            // muestra el resultado si es correcto
            if (isValid) {
                alert('¡Formulario enviado correctamente!');
                form.reset(); // Reinicia la forma de texto
            }
            
        });
    }
});

// Estilo para mostrar el error
function mostrarError(campo, mensaje) {
    campo.classList.add('is-invalid'); // Is invalid es el formato de bootstrap para mostrar mensajes
    campo.style.borderColor = '#dc3545';

    // Elimina los mensajes de error
    const errorExistente = campo.parentNode.querySelector('.error-message'); // DOM que busca el elemento de .error-message para estilado
    if (errorExistente) {
        errorExistente.remove();
    }
    
    // Mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-danger small mt-1'; // Text-danger  y small mt-1 viene de bootstrap
    errorDiv.textContent = mensaje; // Se almacenan los mensajes de error
    campo.parentNode.after(errorDiv); //Método DOM para inserción de elementos
}

// Para eliminar todos los mensajes de error
function limpiarErrores() {
    document.querySelectorAll('.is-invalid').forEach(campo => {
        campo.classList.remove('is-invalid'); // Is invalid viene de bootstrap. subclase
        campo.style.borderColor = ''; // Reinicia el estilo a un string vacío
    });
    
    document.querySelectorAll('.error-message').forEach(error => error.remove());
}
