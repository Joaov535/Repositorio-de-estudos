//Atribuição via desestruturação

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//utilizando o operador rest
const [item1, , item3, ...restante] = numeros;
console.log(item1, item3);
console.log(restante);
