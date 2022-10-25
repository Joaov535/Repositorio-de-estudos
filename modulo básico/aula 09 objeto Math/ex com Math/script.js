const num = Number(prompt('Digite um número'));
const numTitulo = document.querySelector('#numeroTitulo');
const texto = document.querySelector('#txtDiv');

numTitulo.innerHTML = num;
texto.innerHTML = ' ';
texto.innerHTML += `<p>A raiz quadrada é ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Com dua casas decimais ${num.toFixed(2)}</p>`;

