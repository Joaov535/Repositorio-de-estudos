//     sem parâmetro pega dia atual
const data = new Date('2017-04-21 19:05:45.350');
console.log('DIa', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - 6
console.log(Date.now()); //contagem em ms do dia 0 (01/01/1970) ate agora.
