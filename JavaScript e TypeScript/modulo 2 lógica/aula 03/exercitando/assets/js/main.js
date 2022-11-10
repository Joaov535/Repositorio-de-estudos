function escopo() {
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const cor = formulario.botaoRadio.value;
        console.log(cor);
        console.log(typeof cor);
        document.body.style.backgroundColor = cor; 
    }); 
}
escopo();