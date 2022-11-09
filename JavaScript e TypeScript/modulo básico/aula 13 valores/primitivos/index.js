//Dados primitivos

let a = 'A';
let b = a;   //Foi feita uma cópia do valor de a nesse momento
console.log(a, b);
//alterando a e checando o valor de b
a = 'C';
console.log(a, b);

/*O valor não é passado para b 
pois não foi feita uma cópia apos a alteração
do valor de a, como não é passado por referência 
o valor de b segue o mesmo*/