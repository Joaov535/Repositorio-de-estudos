
function criaPessoa(name, lastname, age, height, weight) {
    return {
        nome: name,
        sobrenome: lastname,
        idade: Number(age),
        altura: Number(height),
        peso: Number(weight),

        imc() {
            return (this.peso / (this.altura ** 2))
        },

        fala_imc() {
            return `${this.nome} ${this.sobrenome} tem o imc ${this.imc()}`
        }
    }
}

const pessoa1 = criaPessoa('João', 'Araujo', '18', '1.80', '82');
console.log(pessoa1)