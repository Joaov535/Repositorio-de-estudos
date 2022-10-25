const nomes = ['João', 'Letícia'];
console.log('2  ',nomes);
//modificando o indice 1 do array
nomes[1] = 'Paula';
console.log('5  ',nomes);
//adicionando um novo nome no array
nomes[2] = 'Cesar';
console.log('8  ', nomes);
//usando o metodo push para adicionar no fim
nomes.push('Ofélia');
console.log('11  ', nomes);
//usando o metodo unshift para adicionar no começo
nomes.unshift('Heloisa');
console.log('14  ', nomes);
//Removendo e armazenando o item removido do final
const removido = nomes.pop();
console.log('17  ',nomes);
console.log('18  ', 'removido ' + removido);
//Removendo item do começo (também é possível armazenar em variável)
nomes.shift();
console.log('21  ', nomes);
//Deletando itens do array
delete nomes[2];
console.log('24  ', nomes, ' propriedade índice [2] = ', nomes[2]);
//Fatiando array
nomes.push('Pedro');
nomes.push('Stefany');
console.log('28  ', nomes.slice(0, 2)); //positivo
console.log('29  ', nomes.slice(0, -1)); //negativo
//Verificando se é um array
console.log('31  ', nomes instanceof Array);



