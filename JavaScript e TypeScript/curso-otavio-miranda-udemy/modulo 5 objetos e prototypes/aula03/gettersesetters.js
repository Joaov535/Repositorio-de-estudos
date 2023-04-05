// Getters e Setters (pegar e setar valores)

// Função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Inválido')
                throw new TypeError('!Number');
            }
            estoque = valor;
            return estoque;
        }
    });

}

// Funçaõ fabrica
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

//const p1 = new Produto('Meia', 10.45, 50)
//p1.estoque = 300;
//console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
console.log(p2.nome)