const paragrafos = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p');
//Selecionando todos os estilos do body
const estilosBody = getComputedStyle(document.body);
const bgcolorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = bgcolorBody;
    p.style.color = 'white';
}