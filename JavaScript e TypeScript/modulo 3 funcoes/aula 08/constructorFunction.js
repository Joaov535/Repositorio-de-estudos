// Sempre usar letra maiúscula na primeira letra
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){
        console.log('Sou um método interno')
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function () {
        console.log(this.nome + ' ' + this.sobrenome);
    };
}

const P1 = new  Pessoa('João', 'Victor'); // Sempre usar o operador new
//P1.nomeCompleto();
console.log(typeof P1);