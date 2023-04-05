// Para funções declaradas com a palavra function
// function funcao() {             // () parâmetros 
//     console.log(arguments)
// };
// funcao(1, 2, 3, 4, 5, 6)        // () argumentos

// Mesmo quando a função não possui um parâmetro
// os argumentos passados são guardados 
// na varável arguments, quando a função é
// declarada com a palavra function.

// Uma boa prática é usar o rest operator 
// em vez do arguments

// forma mais moderna:
const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;       
    };
    console.log(acumulador);
};
 conta('*', 1, 100, 2, 10);