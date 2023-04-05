var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var button = document.querySelector('#btnCalc');
var res = document.querySelector('#res');
function calcula(x, y) {
    return x + y;
}
button.addEventListener('click', function () {
    res.innerHTML = calcula(+num1.value, +num2.value).toString();
});
