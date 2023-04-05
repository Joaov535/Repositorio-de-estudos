// Factory function / Constructor function
// Escolher o que mais tem facilidade.

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade,
//         // É um método que fingirá ser uma propriedade
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }   

// const p1 = criaPessoa('João', 'Cruz');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

// new cria um objeto vazio {}
// e atrela a palavra this dentro 
// de Pessoa() ao objeto criado
// e retorna o this

// nesse caso this é p1
const p1 = new Pessoa('João', 'Cruz', 22);
console.log(p1);

// Nesse caso this é p2
const p2 = new Pessoa('Josevaldo', 'Ferreira', 53);
// Travando o objeto (não pode ser alterado)
Object.freeze(p2);
console.log(p2);
