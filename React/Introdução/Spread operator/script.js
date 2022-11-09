function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo:'programador',
        status:'Júnior'
    };
    return novosDados;
}

console.log(cadastroPessoa({nome:'João', sobrenome:'Araujo', idade:22}))