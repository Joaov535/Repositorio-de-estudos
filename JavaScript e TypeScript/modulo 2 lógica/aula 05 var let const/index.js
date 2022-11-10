const verdade = true;

//let tem escpo de bloco {}
//var tem escopo de função

let nome = 'João';
var nome2 = 'Ana';
console.log(nome, nome2);

if (verdade) {
    let nome = 'Pedro';
    var nome2 = 'Paula';
    console.log(nome, nome2);

    if (verdade) {
        let nome = 'Cleber';
        var nome2 = 'Simone';
        console.log(nome, nome2);
    }
};

console.log(nome, nome2);