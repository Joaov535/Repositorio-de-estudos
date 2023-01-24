// Métodos úteis para objetos

// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {...produto, material: 'Porcelana'};
// // A maneira mais simples de copiar o valor é usando
// // spread operator. Assim é possível modificar o valor sem 
// // alterar o valor original do objeto
// // Ex:

// caneca.nome = 'Xícara';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);


// Copiando o objeto em um novo usando 
// assign()

// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto);

// caneca.nome = 'Copo';
// caneca.preco = 22.50
// console.log(produto);
// console.log(caneca);
// Dessa forma continuamos sem alterar o
// valor original em produto.


// Outra forma é copiando somente as chaves que precisa
// Pode ser util em objetos grandes quando só necessita
// de algumas chaves

// const produto = {nome: 'Produto', preço: 4.50, material: 'Porcelana', estoque: 50};
// const caneca = {nome: produto.nome, preço: produto.preço, estoque: produto.estoque, cor: 'Azul'};

// console.log(produto);
// for(const i in caneca){
//     console.log(i,':', caneca[i]);
// }


// Utilizando Object.freeze para impossibilitar
// que o array seja alterado

// const produto = {nome: 'Produto', preço: 4.50, material: 'Porcelana', estoque: 50};
// Object.freeze(produto);
// const caneca = produto;

// caneca.nome = 'Xícara';
// caneca.material = 'Plástico';

// console.log(produto);
// console.log(caneca);
// Não é possível alterar nenhuma propriedade do objeto

// const produto = {nome: 'Produto', preço: 4.50, material: 'Porcelana', estoque: 50};
// Object.freeze(produto);
// const caneca = {nome: produto.nome, preço: produto.preço, estoque: produto.estoque, cor: 'Azul'};

// caneca.nome = 'Xícara';
// caneca.material = 'Plástico';

// console.log(produto);
// console.log(caneca);


// const produto = {nome: 'Produto', preço: 4.50, material: 'Porcelana', estoque: 50};
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // obj e a propriedade q deseja ver

const produto = {nome: 'Produto', preço: 4.50, material: 'Porcelana', estoque: 50};
// console.log(Object.keys(produto)); // mostra as chaves
// console.log(Object.values(produto)); // mostra os valores
// console.log(Object.entries(produto)); // mostra chaves e valores
// Fazendo destructuring com for of
for (const [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
