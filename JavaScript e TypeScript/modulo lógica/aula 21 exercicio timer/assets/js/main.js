function meuTimer() {

    // Selecionando os elementos 
    const cronometro = document.querySelector('.cronometro')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')

    // Itens do tempo 
    let h = 0;
    let m = 0;
    let s = 0;
    let cron;

    // Criando eventos quando clicar
    iniciar.addEventListener('click', function () {
        cron = setInterval(() => { timer(); }, 1000);
        cronometro.classList.remove('parado')
        console.log('Iniciou');
    });

    pausar.addEventListener('click', function () {
        clearInterval(cron);
        cronometro.classList.add('parado')
        console.log('parou');

    });

    zerar.addEventListener('click', function () {
        clearInterval(cron);
        h = 0;
        m = 0;
        s = 0;
        cronometro.innerHTML = '00:00:00';
        cronometro.classList.remove('parado')
        console.log('zerou');

    });

    // Função timer
    function timer() {
        // Formatando o tempo
        let formato = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s} `

        s = s + 1;

        if (s == 60) {
            s = 0;
            m++;

            if (m == 60) {
                m = 0;
                h++;
            };
        };

        cronometro.innerHTML = formato;
        return formato;
    };
}
meuTimer();