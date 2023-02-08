// Criando algoritmo de validação

function escopoGlobal() {
    const secao = document.querySelector('#footerTxt');
    const valorCPF = document.querySelector('#valorCPF');
    const botao = document.querySelector('#btn-validacao')


    // Capturando clique no botão
    botao.addEventListener('click', validar);
    
    // Função click acionado
    function validar() {console.log('Ok');}
    
}

escopoGlobal();
