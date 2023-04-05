// Filtrando o array

//Retorne os números maiores que 10
const a1 = [1, 60, 30, 2, 23, 7, 19, 20, 10, 4];
const a1Filtrados = a1.filter(valor => valor > 10); // #
console.log(a1Filtrados);


// caso a função callback for usada em outra função podemos 
// fazer da seguinte forma:

const a2 = [2, 65, 40, 6, 13, 7, 19, 20, 10, 4];
// criando a função de callback
function callbackFiltro(valor) {
    console.log(valor);
    return valor > 10;
}

const a2Filtrados = a2.filter(callbackFiltro);
console.log(a2Filtrados);

//  # É o mesmo que filter((valor) => {
//     return valor > 10; 
// });
// Retornará um valor boleano que em
// caso verdadeiro o elemento sera 
// posto dentro do array a1Filtrados.
// Em arrow functions o retorno é implicito.



// function maiorQ10() {
//     const a1 = [1, 60, 30, 2, 23, 7, 19, 20, 10, 4];
//     const a2 = [];

//     for (const i of a1) {
//         if (i > 10) {
//             a2.push(i);
//         }
//     };
//     return a2;
// }
// console.log(maiorQ10());
