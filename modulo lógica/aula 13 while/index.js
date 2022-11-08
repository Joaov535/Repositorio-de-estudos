// Usamos o while geralmente quando não sabemos
// quantas vezes o laço será repetido. Ex:

//A função criará um número aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//Variáveis definindo o escopo
//dos numeros gerados
const min = 1;
const max = 20;
//Inicializando a variávl de controle
let rand;
//Será executado até rand == 5
while (rand !== 5) {
    rand = random(min, max);
    console.log(rand);
};