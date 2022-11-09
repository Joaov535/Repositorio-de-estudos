const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e y precisam ser numeros')
    }
    return x + y;
}

//funciona como o if else 
try { //Executada quando não há erros
console.log(soma(3, 2));
console.log(soma('5', 2));
} catch (error) {  //Executada quando há erros
    //console.log(error); //Mostra o erro completo
    console.log('Deu ruim!'); //mensagem mais agradavel para o usuário
}

//NUNCA exiba o erro no console do usuário
