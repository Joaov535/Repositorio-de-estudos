var lista = ["João", "Gabi", "Marta", "Alfredo", 27];

function buscar() {
    var texto1 = prompt('Digite a posição do ítem');
    if (lista[texto1] == undefined) {
        alert('Digíte um algarismo válido')
    }
    else {
        alert('O elemento da posição ' + texto1 + ' é ' + lista[texto1]);
    };
}


