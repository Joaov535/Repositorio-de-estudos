// Retorne a soma do dobro de todos os pares.

const vetor = [2, 4, 25, 34, 14, 3, 13, 42];
const resultado = vetor.filter(callbackPar).map(callbackDobro).reduce(callbackSoma);
console.log(resultado);

function callbackPar(valor) { return valor % 2 === 0; }
function callbackDobro(valor) { return valor * 2; }
function callbackSoma(acumulador, valor) { return acumulador + valor; }
