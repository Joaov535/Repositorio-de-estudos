// Usando função contrutora para construir um objeto
const pessoa1 = new Object();

// Atribuindo propriedades ao objeto
pessoa1.nome = 'João';
pessoa1.idade = 22;
pessoa1.endereco = 'Londrina'

// console.log(pessoa1);

// Métodos dentro da função facilitam o acesso das propriedades.
const pessoa2 = new Object();
pessoa2.nome = 'Marlene';
pessoa2.idade = 28;
pessoa2.endereco = 'Campo Grande - MG';
pessoa2.fala = function() {
    return `${this.nome} de ${this.endereco} está falando com você.`
};

console.log(pessoa2.fala());
