// Retorne as pessoas que tem o nome com mais de 5 letras.
// Retorne as pessoas com mais de 50 anos.
// retorne as pessoa que o nome termine com a letra a.

const pessoas = [
    { nome: 'Luiza', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'José', idade: 56 },
    { nome: 'Vanilza', idade: 63 },
    { nome: 'Virlenio', idade: 38 },
    { nome: 'Woshington', idade: 57 }
];

// Retornando pessoas que tem mais de 5 letras no nome
const maisQ5L = pessoas.filter(obj => obj.nome.length > 5);
console.log(maisQ5L);
console.log('-------------------------------------');

// Retornando as pessoas com mais de 50 anos
const maisQ50A = pessoas.filter(obj => obj.idade > 50);
console.log(maisQ50A);

// retornando as pessoas que o nome termina com a letra a
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);
