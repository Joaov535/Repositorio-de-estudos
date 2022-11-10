function escopo() {

    const data = new Date();
    //Retornando o nome dos meses
    function txtMes(mes) {
        const textoMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return textoMes[mes];
    };
    //Retornando os nomes dos dias
    function diaSemana(numDia) {
        const diaSemTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
        return diaSemTexto[numDia];
    };
    //Formatando os minutos
    function zeroEsquerda(num) {
        return num <= 10 ? `0${num}` : num;
    }
    //Criando texto do HTML
    function criaTxt(data) {
        const semana = data.getDay();
        const diaSemTxt = diaSemana(semana);
        const mes = data.getMonth();
        const mesTxt = txtMes(mes);

        return `${diaSemTxt}, ${data.getDate()} de ${mesTxt} de ${data.getFullYear()} ${data.getHours()}:${zeroEsquerda(data.getMinutes())}`;
    };
    //Alterando o HTML
    const paragrafo = document.querySelector('.container h1');
    paragrafo.innerHTML = criaTxt(data);
}
