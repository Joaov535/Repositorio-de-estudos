function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
firstLetterUpperCase('joão');
//                                    type do retorno da função
function somar(n1, n2) {
    var soma = n1 + n2;
    return soma;
}
var res = somar(12, 5);
