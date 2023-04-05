const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false });
}

// O 2° parâmetro é o tempo que durará a execução do primeiro parâmetro
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// O 2° parâmetro define quando será executado o primeiro
setTimeout(function () {
    clearInterval(timer); // Para a execução
}, 5500);

setTimeout(function(){
    console.log('Parou!');
}, 6000);
