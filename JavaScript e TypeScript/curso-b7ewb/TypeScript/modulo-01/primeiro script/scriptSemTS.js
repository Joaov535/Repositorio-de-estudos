// Código sem o typescript

// Aqui temos que fazer a verificação do tipo primitivo dos valores que são enviados no input
// como o input sempre envia string temos que fazer a conversão dos dados para que a soma seja feita

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let button = document.querySelector('#btnCalc');
let res = document.querySelector('#res');


function calcula(x, y) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return x + y;
    } else {
        x = Number(x);
        y = Number(y);
        return x + y;
    }
}

button.addEventListener('click', () => {
    res.innerHTML = calcula(num1.value, num2.value);
})