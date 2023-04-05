//For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'João',
    sobrenome: 'Cruz',
    idade: 22,
};

for (const key in pessoa) {
console.log(key, pessoa[key])
};