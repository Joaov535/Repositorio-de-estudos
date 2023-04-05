// defineProperty() e defineProperties()

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false,   // Mostra a chave
        value: estoque,     // O valor atribuido
        writable: true,     // Define se poderá ser alterado o valor
        configurable: false  // Permite configurar ou não a propriedade 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.preco = 30;
console.log(p1);
