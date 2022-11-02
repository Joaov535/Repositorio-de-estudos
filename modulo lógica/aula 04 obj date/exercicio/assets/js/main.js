function escopo() {

    //Variáveis 
    const data = new Date();
    const dia = data.getDate();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const ano = data.getFullYear();

    //Retornando o nome dos meses
    function txtMes(mes) {
        let textoMes;

        switch (mes) {
            case 0:
                textoMes = 'Janeiro';
                return textoMes;
            case 1:
                textoMes = 'Fevereiro';
                return textoMes;
            case 2:
                textoMes = 'Março';
                return textoMes;
            case 3:
                textoMes = 'Abril';
                return textoMes;
            case 4:
                textoMes = 'Maio';
                return textoMes;
            case 5:
                textoMes = 'Junho';
                return textoMes;
            case 6:
                textoMes = 'Julho';
                return textoMes;
            case 7:
                textoMes = 'Agosto';
                return textoMes;
            case 8:
                textoMes = 'Setembro';
                return textoMes;
            case 9:
                textoMes = 'Outubro';
                return textoMes;
            case 10:
                textoMes = 'Novembro';
                return textoMes;
            case 11:
                textoMes = 'Dezembro';
                return textoMes;
        };
    };
    const mes = data.getMonth();
    const mesTxt = txtMes(mes);

    //Retornando os nomes dos dias
    function diaSemana(numDia) {
        let diaSemTexto;

        switch (numDia) {
            case 0:
                diaSemTexto = 'Domingo';
                return diaSemTexto;
            case 1:
                diaSemTexto = 'Segunda-Feira';
                return diaSemTexto;
            case 2:
                diaSemTexto = 'Terça-Feira';
                return diaSemTexto;
            case 3:
                diaSemTexto = 'Quarta-Feira';
                return diaSemTexto;
            case 4:
                diaSemTexto = 'Quinta-Feira';
                return diaSemTexto;
            case 5:
                diaSemTexto = 'Sexta-Feira';
                return diaSemTexto;
            case 6:
                diaSemTexto = 'Sabado';
                return diaSemTexto;
        };
    };
    const semana = data.getDay();
    const diaSemTxt = diaSemana(semana);

    //Alterando o HTML
    const paragrafo = document.querySelector('#infoDia')
    paragrafo.innerHTML = `${diaSemTxt}, ${dia} de ${mesTxt} de ${ano} ${hora}:${minutos}`;
}

