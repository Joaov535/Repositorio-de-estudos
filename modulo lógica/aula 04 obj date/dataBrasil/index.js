
function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear() + 1;
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const infoData = new Date();
const dataBrasil = formataData(infoData);
console.log('Info Dia Brasil:', dataBrasil);