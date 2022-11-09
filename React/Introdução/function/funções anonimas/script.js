/*  const lista = [1,2,3,4,5];

    const soma = lista.reduce(function(total, proximo) {
    return total + proximo;
});

console.log(soma); */

//function dentro de lista.reduce() é uma função anonima

//simplificando temos "function (){};" equivalente a  "=>" quando não necessario criar nova variavél

/* function adicionar(...numeros) {

    let total1 = numeros.reduce((total, proximo) => total + proximo);
    console.log(total1);
}

adicionar(1,2,3,4,5,6); */

//Simplificando de forma completa ficaria 

function adicionar(...numeros) {

    let tot = numeros.reduce((total, proximo) => {
        let soma = total + proximo
        return soma;
    });

    console.log(tot);
}

adicionar(1,2,3,4,5,6,7);
