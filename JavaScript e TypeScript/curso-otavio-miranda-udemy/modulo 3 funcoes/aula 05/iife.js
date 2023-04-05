// IIFE (Immediately Invoked Function Expression)
// é uma função em JavaScript que é executada assim que definida.
/*
  Sintáxe:
  (function() {

  })();
*/

(function (nome, sobrenome) {
    function falaOi() {
        if (typeof nome !== "string" || typeof sobrenome !== "string") {
            console.log('Oi');
        } else {
            console.log(`Olá ${nome} ${sobrenome}`);
        }
    }
    falaOi();
})();  
