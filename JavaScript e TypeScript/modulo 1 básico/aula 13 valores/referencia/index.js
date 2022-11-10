//Passagem de valores por referência
const a = [1, 2, 3];
const b = a;  //b aponta para o mesmo lugar na memória que a
const c = [...b]; //foi feito um spread, o valor de b foi COPIADO
console.log(a, b, c);
//alterando o vetor a 
a.pop();
console.log(a, b, c);
//vetor b também foi alterado
//alterando o valor de b
b.push(4);
console.log(a, b, c);
//vetor a também foi alterado 