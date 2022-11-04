const pessoa = {
    nome: 'João',
    idade: 21,
    endereço: {
        rua: 'Rua Capim Alto da Serra',
        bairro: 'São Matagal',
        numero: 29
    }
}

//Atibuição via desestruturção
//const {nome, idade} = pessoa;
//console.log(nome, idade);

//Mudando nome do atributo do objeto
//const {nome: n} = pessoa;
//console.log(n)

//Realizando ...rest
//const {nome, idade, ...resto} = pessoa;
//console.log(nome, idade);
//console.log(resto);

//Acessando os itens do endereço
const {endereço: {rua, numero}} = pessoa;
console.log(rua + ', '+ numero);