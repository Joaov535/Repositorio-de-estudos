let nomes: string[] = ['João', 'Pedro', 'Charles'];
// Dessa forma indicamos que será um array de strings

// Outro tipo de notação menos utilizada
let numeros: Array<number> = [1, 4, 54, 3];

// Mais indicado
let numeros2: number[] = [5, 2, 34, 1];

// type Any: Aceita que a variável armazena qualquer tipo
let coisas: any = ['Panela', 25, true];

// mesmo não setando o tipo do array o typescript presume 
// e assume o tipo primitivo do array