import { sumar, restar, multiplicar, dividir, evaluarErrores } from "./funciones.js";
import { num1,num2, num1Error,num2Error, botonSumar, botonRestar, botonMultiplicar, botonDividir } from "./variables.js";

botonSumar.addEventListener('click', () => {
    evaluarErrores()
    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = sumar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonRestar.addEventListener('click', () => {
    evaluarErrores()
    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = restar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonMultiplicar.addEventListener('click', () => {
    evaluarErrores()
    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = multiplicar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonDividir.addEventListener('click', () => {
    evaluarErrores()
    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = dividir(parseFloat(num1.value), parseFloat(num2.value));
    }
});