/*	
Operadores lógicos:
e &&
ou ||
negação !
Valores que são avaliados como falso:
false (literal)
0  zero
" "  '  '  `  ` strings vazias
null / undefined
NaN
*/
function falaOi() {
    return 'Oi';
}
//variável com valor falso
const vaiExecutar = 0;
//vai retornar o primeiro valor falso encontrado
console.log(falaOi() && vaiExecutar);
//retorna o primeiro valor verdadeiro encontrado
console.log(false || 0 || 'palavra' || true);