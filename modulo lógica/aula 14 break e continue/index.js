//break: sai do laço
//continue: pula para a próxima iteração

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const i of numeros) {
    
    if (i === 2){
        console.log('Pulei o número 2');
        continue;
    }

    if (i === 6) {
        console.log('7 encotrado, saindo...')
        break;
    }

    console.log(i)
}