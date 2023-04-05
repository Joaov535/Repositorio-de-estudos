// Geradores são funções cuja execução
// pode ser interrompida e posteriormente reconduzida.
// Seus contextos (de associações de variáveis)
// ficarão salvos entre cada recondução.

function* geradora() {
    // Código qualquer
    yield 'Valor 1'  // Parecido com return
    // Código qualquer
    yield 'Valor 2'
    // Código qualquer
    yield 'Valor 3'
}

const g1 = geradora();
for (const valor of g1) {
    console.log(valor);
}

console.log('------------------------------');

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    };
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('------------------------------');

function* geradora3() {
    yield 'g3'
    yield 0;
    yield 1;
    yield 2;
    yield 'g3'
}

function* geradora4() {
    yield 3;
    yield* geradora3();
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (const valor of g4) {
    console.log(valor);
};
