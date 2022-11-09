//Atribuição via desestruturação
//...spread, ...rest

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
//Mostrando os itens do vetor
console.log(lista1, lista2, lista3)
//Acessando o índice 2 do índice 2 do vetor
console.log(lista3[2]);