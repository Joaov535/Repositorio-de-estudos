//For
// for (variável de controle; condição; incremento) {}
//Ex:
//                            i = i+2
//   for (let i = 0; i <= 10; i += 2) {
//      console.log('linha', i);
//   }

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(i, par);
}
