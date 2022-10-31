function escopoGlobal() {
    //Parando envio do formulário
    const form = document.querySelector('.form')

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado('Peso inválido!', false);
            return;
        }
        if (!altura) {
            setResultado('Altura inválida!', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivel = getNivel(imc);

        setResultado(`seu imc é ${imc}, (${nivel})`, true)
    });

    
    //Calculando IMC
    function getImc(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2);
    }
    
    //nível de imc
    function getNivel(imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9) return nivel[5]; // não precisa {} nesse caso
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
    
    //função criar parágrafo
    function criaP() {
        const p = document.createElement('p');
        return p;
    }
    
    //função para escrever resultado
    function setResultado(msg, isValid) {
        const res = document.querySelector('.res')
        res.innerHTML = '';
    
        const p = criaP();
    
        if (isValid) {
            p.classList.add('paragrafo-res')
        } else {
            p.classList.add('bad')
        }
    
        p.innerHTML = msg;
        res.appendChild(p);
    }
    
    
}
escopoGlobal();