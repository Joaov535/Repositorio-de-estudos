// Entendendo prototype (_proto_)

// Criando uma função construtora


// 

function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.nomeCompleto = () => 'Original: ', this.nome, this.sobrenome;
}

const pessoa1 = new Pessoa('Victor', 'Trindade');
const pessoa2 = new Pessoa('Ana', 'Barboza');

console.dir(pessoa1);
console.dir(pessoa2);