const pessoas = [
    { nome: 'Luiza', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'José', idade: 56 },
    { nome: 'Vanilza', idade: 63 },
    { nome: 'Virlenio', idade: 38 },
    { nome: 'Woshington', idade: 57 }
];

// retorne a pessoa mais velha
const maisVelha = pessoas.reduce(callback);
console.log(maisVelha);

function callback(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
};