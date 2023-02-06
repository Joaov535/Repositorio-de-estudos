// Exemplo prático de manipulaçãod e prototype

// Em vez de criar métodos dentro da função, criaremos os métodos dentro do prototype
// É mais performático colocar os métodos fora da função construtora

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando um método dentro do prototype que da um acrécimo ounum desconto no preço

// metodo que da desconto de acordo com o percentual passado
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
};

// Método que acrescenta um preço de acordo com o percentual passado
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
};

const p1 = new Produto('Camiseta', 165);
console.log(p1);

// o O preço aumentou 36%
// P1.aumento(36)
// console.log(P1.preco)

// o preco caiu 10%
// p1.desconto(10)
// console.log(p1.preco)


// Criando um novo objeto e aproveitado o prototype de Produto

const p2 = {
    nome: 'Calça',
    preco: 80
};
 
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);

// console.log('Calça R$', p2.preco);
// O método aumento pode ser utulizado por p2
console.log(p2);

// Criando um objeto e atribuindo o prototype na criação do objeto (quem é o pai)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,   
        configurable: false,
        enumerable: false,
        value:120
    },
    nome: {
        value:'Butina'
    }
})

// Os métodos criados no prototype de Produto podem ser reaproveitados por p3
p3.desconto(50)
console.log(p3.preco);
