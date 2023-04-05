// Será gerado um número alatório entre 1000 e 3000.
function aleatorio(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback() // Se for passado um parâmetro será executado a função.
    }, aleatorio());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback()
    }, aleatorio());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback()
    }, aleatorio());
}

// Executando o callback
f1(f1callback); 

function f1callback() {
    f2(f2callback);
};

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('Olá mundo!')
}


/*
   Assim como ocorre na internet, 
  essas funções são executadas em tempos diferentes.
  Caso seja necessário execula-las em uma ordem
  especifica, utulizamos o callback.
*/
