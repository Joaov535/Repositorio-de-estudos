// Funções recursivas são funções que 
// chamam a si mesmas
function recursiva(max) {
    if(max > 10) return; // A recursividade tem um limite de execuções 
    console.log(max);
    max++;
    recursiva(max);
}
recursiva(0);
