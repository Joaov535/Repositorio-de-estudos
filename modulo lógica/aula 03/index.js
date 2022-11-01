//Operador ternário
// (condição) ? 'valor se verdadeiro' : 'valor se falso';
const usuario = 1000;
const nivelUsuario = usuario >= 1000 ? 'Usuário VIP' : 'Usuário comum';
console.log(nivelUsuario);

//É o mesmo que 
const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário comum');
};