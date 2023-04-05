function createPerson(name, lastName, age) {
    return {
        nome: name,
        sobrenome: lastName,
        idade: age,
        getFullName: () => {
            return this.nome + ' ' + this.sobrenome;
        }
    }
}

let pessoa1 = createPerson('João', 'Araujo', 22);

console.log(pessoa1. getFullName());  // Saída: undefined undefined

// A função está dentro da propriedade getFullName, portanto o this não enxerga as propriedades da função fábrica.

// Para resolver isso, em vez de criar uma função no atributo, basta criar um método, assim o this será a instancia, no caso, pessoa1

// function createPerson(name, lastName, age) {
//     return {
//         nome: name,
//         sobrenome: lastName,
//         idade: age,
//         getFullName() {
//             return this.nome + ' ' + this.sobrenome;
//         }
//     }
// }
