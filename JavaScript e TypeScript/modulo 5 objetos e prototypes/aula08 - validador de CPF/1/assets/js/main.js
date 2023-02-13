// Criando algoritmo de validação

function escopoGlobal() {

    // Variáveis
    let numCPF;
    let limpoCPF;

    // Capturas
    const resultado = document.querySelector('#res-txt');
    const inputCPF = document.querySelector('#CPF-num');
    const botao = document.querySelector('#btn-validacao')


    // Capturando clique no botão
    botao.addEventListener('click', validar);

    // Função click acionado
    function validar() {

        numCPF = inputCPF.value;
        limpoCPF = numCPF.replace(/\D+/g, '');
        
        
        
        if (valido() === true) {
            resultado.innerHTML = 'CPF Válido!'
        } else {
            resultado.innerHTML = 'CPF Inválido!'
        }

        function valido() {

            // verificando se o valor é valido para um CPF
            if(typeof limpoCPF == 'undefined') return false;
            if (limpoCPF.length !== 11) return false;

            // modelo de laço (Precisa ajustar)
            let x = 10;
            let b = 0;
            let res;

            while (x > 2) {

                let a = arr[b];

                res = + a * x;

                x = x - 1;
                b++;
            }

            console.log(res);




            return true;
        }

    }


}

escopoGlobal();




// outra ideia

// let a1 = limpoCPF[0];
// let a2 = limpoCPF[1];
// let a3 = limpoCPF[2];
// let a4 = limpoCPF[3];
// let a5 = limpoCPF[4];
// let a6 = limpoCPF[5];
// let a7 = limpoCPF[6];
// let a8 = limpoCPF[7];
// let a9 = limpoCPF[8];