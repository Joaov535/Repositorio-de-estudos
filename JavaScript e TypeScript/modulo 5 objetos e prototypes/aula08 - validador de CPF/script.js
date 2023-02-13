// tentando...

function escopoGlobal() {
    // Usando função construtora

    // capturando o valor digitado no input
    const resultado = document.querySelector('#res-txt');
    const inputCPF = document.querySelector('#CPF-num');
    const botao = document.querySelector('#btn-validacao')

    function limpaCPF(valor) {
        const cpfLimpo = valor.replace(/\D+/g, '');
        console.log(cpfLimpo);
    }
    
    botao.addEventListener('click', limpaCPF(inputCPF))
}

escopoGlobal();
