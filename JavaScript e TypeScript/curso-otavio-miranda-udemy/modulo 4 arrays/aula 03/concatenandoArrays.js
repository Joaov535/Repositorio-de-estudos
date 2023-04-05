const a1 = [1, 2];
const a2 = [3, 4];
// Usando o metodo concat
const a3 = a1.concat(a2, [5], 'Olá');

// Usando o spread oparator
const a4 = [...a1, 'Olá', ...a2, ...[5, 6, 7]]

console.log(a3);
console.log(a4);
