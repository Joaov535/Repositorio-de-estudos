
function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        }
    });
}

const p1 = new Produto('Tenis', 250, 400);
p1.preco = 199.99;
console.log(p1);
