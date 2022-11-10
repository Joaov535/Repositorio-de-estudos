//função que cria objetos
function criarPessoa(nome, sobrenome, idade, natural) {
    return { nome, sobrenome, idade, natural }; //quando nome dos parâmetros e atributos forem iguais
}
//passando os argumentos 
const pessoa1 = criarPessoa('João', 'Kleber', 22, 'Brasil');
const pessoa2 = criarPessoa('Gabriela', 'Gonçalves', 18, 'Argentina');
const pessoa3 = criarPessoa('Lívia', 'Pereira', 30, 'Portugal');
//acessando os atributos dos objetos
console.log('nome da pessoa 3: ' + pessoa3.nome);
console.log('idade da pessoa 3: ' + pessoa3.idade);
console.log('Naturalidade da pessoa 3: ' + pessoa3.natural);
console.log('sobrenome da pessoa 2: ' + pessoa2.sobrenome);
console.log('naturalidade da pessoa 2: ' + pessoa2.natural);
//objeto pessoa 1
console.log('pessoa1', pessoa1)