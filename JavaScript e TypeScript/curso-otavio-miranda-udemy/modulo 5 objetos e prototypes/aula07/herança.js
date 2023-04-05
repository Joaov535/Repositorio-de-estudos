// Criando uma funçaõ construtora e reaproveitando 

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criando método no prototype da função Produto

Produto.prototype.aumento =  function(acrecimo) {
    this.preco = this.preco + (this.preco * (acrecimo/100));
}

// Criando uma nova função contrutora para reparoveitar Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Prototype é um objeto
// Criando um objeto dentro do prototype de Camiseta
// e setar o prototype do objeto vazio como prototype de Produto
Camiseta.prototype = Object.create(Produto.prototype)

// Agora Camiseta tem os métodos de Produto
const camiseta = new Camiseta('Blusa', 20);
camiseta.aumento(20);
console.log(camiseta)

// Mas dessa forma o contrutor passa a ser produto
const regata = new Camiseta('regata', 15.5, 'Preta');
console.log(regata);

// Definindo o  contrutor de regata
Camiseta.prototype.constructor = Camiseta;
console.log(regata);

// Criando uma nova função construtora de um produto
function Caneca(nome, preco, material, cor) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.cor = cor;
}

// Definindo a harança
Caneca.prototype = Object.create(Produto.prototype)
// Definindo o construtor de Caneca
Caneca.prototype.constructor = Caneca;

// Criando um novo produto
const xicara = new Caneca('Xícara', 23.90, 'Porcelana', 'Branca')
console.log(xicara)
