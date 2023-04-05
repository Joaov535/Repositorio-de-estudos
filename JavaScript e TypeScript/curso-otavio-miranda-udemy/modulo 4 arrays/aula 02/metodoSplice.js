//               -5         -4        -3        -2         -1
//                0          1         2         3          4
const nomes = ['Júlia', 'Antonia', 'Cleide', 'Marcos', 'Everaldo'];

// nomes.splice(índice, delete, elem1, elem2, ... , elemN);

// Imitando o metodo pop()
// const removido = nomes.splice(-1, Number.MAX_VALUE);

// Imitando o metodo push
// nomes.splice(nomes.lenght, 0, 'Laura');

// Removendo itens a partir do indice 2
const removidos = nomes.splice(2, 2);

// Adicionando itens a partir do indice 1
nomes.splice(1, 0, 'Maurilio', 'Cleber');

// Removendo e adicionando no mesmo índice
nomes.splice(2, 1, 'Catarina');

console.log(nomes, removidos);