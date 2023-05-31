function infoPessoa(pessoa: {nome: string, idade?: number}) { // idade é opcional (?)
    if(pessoa.idade == undefined) {
        return `Nome: ${pessoa.nome}`;
    } else {
        return `Nome: ${pessoa.nome}, idade: ${pessoa.idade}`;
    }
}

const pessoa1 = {
    nome: 'João'
}

console.log(infoPessoa(pessoa1));