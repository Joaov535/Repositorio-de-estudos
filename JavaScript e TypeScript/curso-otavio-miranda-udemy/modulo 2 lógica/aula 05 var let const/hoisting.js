//   Entendendo o hoisting...
// As declarações de variáveis e funções são
// fisicamente movidas para o topo do seu código,
// mas isso não é realmente o que acontece.
// Em vez disso, as declarações de variável e função
// são colocadas na memória durante a fase de compilação,
// mas permanecem exatamente onde você as digitou no seu código.

console.log(nome); //var -> undefined  // let -> erro
var nome = 'Gleise';

// É o mesmo que isso
var nome2;
console.log(nome2);
nome2 = 'Gisele';