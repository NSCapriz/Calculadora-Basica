const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const botonSumar = document.getElementById('sumar');
const botonRestar = document.getElementById('restar');
const botonMultiplicar = document.getElementById('multiplicar');
const botonDividir = document.getElementById('dividir');

botonSumar.addEventListener('click', () => {
    const num1Error = document.getElementById('num1Error');
    const num2Error = document.getElementById('num2Error');
    
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

    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = sumar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonRestar.addEventListener('click', () => {
    const num1Error = document.getElementById('num1Error');
    const num2Error = document.getElementById('num2Error');
    
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

    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = restar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonMultiplicar.addEventListener('click', () => {
    const num1Error = document.getElementById('num1Error');
    const num2Error = document.getElementById('num2Error');
    
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

    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = multiplicar(parseFloat(num1.value), parseFloat(num2.value));
    }
});

botonDividir.addEventListener('click', () => {
    const num1Error = document.getElementById('num1Error');
    const num2Error = document.getElementById('num2Error');
    
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

    if (!num1Error.textContent && !num2Error.textContent){
        resultado.textContent = dividir(parseFloat(num1.value), parseFloat(num2.value));
    }
});