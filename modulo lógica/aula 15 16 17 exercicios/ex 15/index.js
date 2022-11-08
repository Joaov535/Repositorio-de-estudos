//Criando uma função que recebe 2 números e retona o maior

//forma padrão
function maior1(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    };
}

//forma reduzida
const maior2 = (x, y) => {
    if (x > y) return x;
    return y;
}

//usando arrow function e operador ternário
const maior3 = (x, y) => x > y ? x : y;

const num1 = 0;
const num2 = 2;

console.log('maior1', maior1(num1, num2));
console.log('maior2', maior2(num1, num2));
console.log('maior3', maior3(num1, num2));