//função que cria objetos
function criarPessoa(nome, sobrenome, idade, naturalidade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        naturalidade: naturalidade
    };
}
//passando os argumentos 
const pessoa1 = criarPessoa('João', 'Kleber', 22, 'Brasileiro');
const pessoa2 = criarPessoa('Gabriela', 'Gonçalves', 18, 'Argentina');
const pessoa3 = criarPessoa('Lívia', 'Pereira', 30, 'Portuguesa');
//acessando os atributos dos objetos
console.log('idade da pessoa 1: ' + pessoa1.idade);
console.log('nome da pessoa 3: ' + pessoa3.nome);
console.log('idade da pessoa 3: ' + pessoa3.idade);
console.log('sobrenome da pessoa 2: ' + pessoa2.sobrenome);
console.log('naturalidade da pessoa 2: ' + pessoa2.naturalidade);
//objeto pessoa 1
console.log('pessoa2', pessoa2)