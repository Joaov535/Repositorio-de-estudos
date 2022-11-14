// Retorno da função

function fraseComplexa(comeco) {
    function fraseMeio(meio) {
        function fraseFim(fim){
            return `${comeco} ${meio} ${fim}.`;
        }
        return fraseFim;
    }
    return fraseMeio;
};

const inicio = fraseComplexa('Uma');
const meio = inicio('frase');
const frase = meio('complexa');

console.log(frase)