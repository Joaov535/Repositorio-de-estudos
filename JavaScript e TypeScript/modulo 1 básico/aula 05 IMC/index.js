//Declaração de variáveis
const data = new Date();
const ano = data.getFullYear();
const nome = 'João';
const sobrenome = 'Victor';
const idade = '22';
const peso = 84;
const altura = 1.79;
//calculo IMC h²/peso e anoNasc
let imc = peso / altura ** 2;
let nascimento = ano - idade;
//Executando
console.log(
    `${nome + ' ' + sobrenome} tem ${idade}, pesa ${peso}kg. </br>
    tem ${altura} de altura e seu IMC é de ${imc} </br>
    ${nome + ' ' + sobrenome} nasceu em ${nascimento}.`
);