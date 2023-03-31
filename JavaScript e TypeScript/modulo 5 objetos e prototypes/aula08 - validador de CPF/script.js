// tentando...

function escopoGlobal() {
    // Usando função construtora

    // capturando o valor digitado no input
    const resultado = document.querySelector('#res-txt');
    const inputCPF = document.querySelector('#CPF-num').value;
    const botao = document.querySelector('#btn-validacao')
  
    console.log(inputCPF);

    function limpaCPF(valor) {
        const cpfLimpo = valor.replace(/\D+/g, '');
        return cpfLimpo;
    }

    limpaCPF(inputCPF)
    
    // botao.addEventListener('click', limpaCPF(inputCPF));
    
}

escopoGlobal();
