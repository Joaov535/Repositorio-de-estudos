// forEach só esta disponível dentro de arrays.
// O método forEach() executa uma dada função em cada elemento de um array.
// O forEach executa o callback fornecido
// uma vez para cada elemento da ordem com um valor atribuido.

const a1 = [10, 20, 30, 40];
let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total)
