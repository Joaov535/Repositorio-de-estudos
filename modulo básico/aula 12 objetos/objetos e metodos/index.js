const pessoa = {
    nome: 'Paula',
    idade: 23,
    peso: 72,

    fala() {
        return `Meu nome é ${this.nome} e peso ${this.peso} Kg.`
    },

    engordou() {
        this.peso++
        return 'Engordou'
    },
};

console.log(pessoa.fala());
console.log(pessoa.engordou());
console.log(pessoa.fala());
