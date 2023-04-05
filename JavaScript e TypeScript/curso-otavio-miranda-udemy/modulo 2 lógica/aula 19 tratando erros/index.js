const retornaHora = (data) => {
    if (data && !(data instanceof Date)){    // data não é instância de Date
        throw new TypeError('Esperando instância de Date')
    }

    if (!data) {  // se não for enviado nenhum parâmetro
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false      // passa para o formato 24h
    });
}

try {                   //  M  D  A
    const data = new Date('04-21-2017 20:43:18');
    const hora = retornaHora(data);
    console.log(hora);
} catch (error) {
    console.log('Tratar erro');
} finally {
    console.log('Tenha um bom dia');
}