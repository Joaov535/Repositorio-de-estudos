// Declaração de função com function ocorre hoisting,
// ou seja, o motor do javascript eleva a função
// declarada com function para o topo, ex:

falaOI();

function falaOI() {
    console.log('Oi');
}

console.log('###############');
// Em JS, função é um objeto de primeira classe
// podemos tratar a função como um dado, ex:
// a função foi jogada dentro de uma variável
const souUmDado = function () {
    console.log('sou um dado');
};

// criando uma função que recebe uma função como parâmetro
function executaFuncao(funcao) {
    console.log('vou executar a função abaixo');
    funcao();
}
executaFuncao(souUmDado);

console.log('###############');

// Arrow function
const funcaoArrow = () => {
    console.log('Enviado por uma arrou function');
};
funcaoArrow();

console.log('###############');

// Função dentro de um objeto
const obj = {
    falar() {
        console.log('Olá!');
    },
    metodo: 'falar() é um metodo do objeto obj'
};
obj.falar();
