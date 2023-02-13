function escopoGlobal() {
// Usando função construtora

// capturando o valor digitado no input
const inputCPF = document.querySelector('#CPF-num');

function ValidaCpf(cpfEnviado) {
 Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    // get retorna um valor, retornando o cpf formatado
    get: function() {
        return cpfEnviado.replace(/\D+/g, '') // seleciona tudo que não é número e substitui por ''
    }
 });
}

// Criando métodos no prototype da função
    ValidaCpf.prototype.valida = function() {
        if(typeof this.cpfLimpo == 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);

        return true;
    }

    ValidaCpf.prototype.criaDigito = function() {

    }

const cpf = new ValidaCpf(inputCPF);
console.log()

}

escopoGlobal();
