function infoPessoa(pessoa) {
    if (pessoa.idade == undefined) {
        return "Nome: ".concat(pessoa.nome);
    }
    else {
        return "Nome: ".concat(pessoa.nome, ", idade: ").concat(pessoa.idade);
    }
}
var pessoa1 = {
    nome: 'João'
};
console.log(infoPessoa(pessoa1));
