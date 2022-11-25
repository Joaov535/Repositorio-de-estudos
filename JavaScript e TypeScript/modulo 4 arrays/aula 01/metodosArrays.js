// Array literal
const nomes = ['Letícia', 'Fernanda', 'Paulo'];
nomes.unshift('José');
nomes.push('Carol');
const removido = [nomes.pop(), nomes.shift()];
console.log(nomes, 'removido: ', removido);

console.log('------------------------------------------');

// Fazendo uma cópia do array nomes
const arrayCopiado = [...nomes];
console.log(arrayCopiado);

console.log('------------------------------------------')

// Alterando valores por referencia
const arrayNomes = nomes;
arrayNomes.push('addPorReferencia');
console.log(arrayNomes);

console.log('------------------------------------------');

// Fatiando o array
arrayFatiado = nomes.slice(0, -2);
console.log(arrayFatiado);

console.log('------------------------------------------');

// Dividindo um array
const frase = 'Uma frase qualquer'
const palavras = frase.split(' ');
console.log(palavras);

console.log('------------------------------------------');

// Juntando um array

const fraseNova = palavras.join(', ');
console.log(fraseNova);
