// Funciones operaciones
export const sumar = (num1, num2) => `Resultado = ${num1 + num2}`;
export const restar = (num1, num2) => `Resultado = ${num1 - num2}`;
export const multiplicar = (num1, num2) => `Resultado = ${num1 * num2}`;
export const  dividir = (numero1, numero2) => numero2 === 0 ? "No es posible dividir por cero." : numero1 / numero2;

// Función para evaluar si inputs estan vacios
export function evaluarErrores(){
    if (num1.value.trim() === ''){
        num1Error.textContent = 'Por favor, introduzca un número.';
        num1Error.classList.add('error-message');
    } else {
        num1Error.textContent = '';
        num1Error.classList.remove('error-message');
    }

    if (num2.value.trim() === ''){
        num2Error.textContent = 'Por favor, introduzca un número.';
        num2Error.classList.add('error-menssage');
    } else {
        num2Error.textContent = '';
        num2Error.classList.remove('error-menssage');
    }
}