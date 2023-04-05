// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// O método reduce() executa uma função reducer (fornecida por você)
// para cada elemento do array, resultando num único valor de retorno.

const vetor1 = [2, 5, 56, 73, 8, 16, 25];

// Some todos os números do array (reduce)
const total = vetor1.reduce((acumulador, valor) => {
    return acumulador + valor;
})
console.log(total);

// Retorne um arrays com os números pares (filter)
// Não utilize esse metodo:
const pares = vetor1.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    };
    return acumulador
}, []);
console.log(pares);

// retorne um arrays com o triplo dos valores (map)
// Não utilize esse método:
const metade = vetor1.reduce(function (acumulador, valor) {
    acumulador.push(valor * 3);
    return acumulador;
}, []);
console.log(metade);
