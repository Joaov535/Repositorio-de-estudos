const lista = [1,2,3,4,5];

const novaLista = lista.map(function(item, index) {
    return item * 2 + index;
});

console.log(novaLista);

//Item -> pega cada elemento da const lista
//index -> passa a posição dos elementos

const soma = lista.reduce(function(total, proximo) {
    return total + proximo;
});

console.log(soma);

//---------------------------------------------------------

const find = lista.find(function(item){
    return item === 3;
});
console.log(find);