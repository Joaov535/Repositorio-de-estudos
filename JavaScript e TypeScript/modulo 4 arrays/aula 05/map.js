// O método map() invoca a função callback passada por argumento
// para cada elemento do Array e devolve um novo Array como resultado.

// Dobrando os valores do array
// const vetor1 = [1, 4, 56, 72, 8, 16, 25];
// const vetor2 = vetor1.map(valor => valor * 2);
// console.log(vetor2);

// Para cada elementro retorne:
// Apenas uma string com o nome da pessoa;
// Remova apenas a chave nome do objeto;
// adicione uma chave id em cada objeto;

const pessoas = [
    { nome: 'Luiza', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'José', idade: 56 },
    { nome: 'Vanilza', idade: 63 },
    { nome: 'Virlenio', idade: 38 },
    { nome: 'Woshington', idade: 57 }
];

const stringNome = pessoas.map(obj => obj.nome)

const semChaveNome = pessoas.map(obj => {
    return { idade: obj.idade };
});

const addChaveId = pessoas.map(function (obj) {
    // caso não queira alterar o array original:
    const newObj = {...obj}
    newObj.id = Math.random().toFixed(4);
    return newObj;
});

console.log(stringNome);
console.log(semChaveNome);
console.log(addChaveId);
console.log(pessoas);
