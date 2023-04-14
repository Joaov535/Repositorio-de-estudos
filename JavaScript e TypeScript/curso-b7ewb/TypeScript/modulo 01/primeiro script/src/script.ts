let num1 = document.querySelector('#num1') as HTMLInputElement;
let num2 = document.querySelector('#num2') as HTMLInputElement;
let button = document.querySelector('#btnCalc') as HTMLInputElement;
let res = document.querySelector('#res') as HTMLInputElement;


function calcula(x: number, y: number) {
    return x + y;
}

button.addEventListener('click', function () {
    res.innerHTML = calcula(+num1.value, +num2.value).toString();
})