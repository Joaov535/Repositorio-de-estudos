//Selecionando elementos no DOM
const divTeste = document.querySelector('.teste');
const divTeste2 = document.querySelector('.teste2');
const btnExibe = document.querySelector('#exibir');
const btnAltera = document.querySelector('#alterarDOM');



//Acessando os elementos da div
btnExibe.addEventListener('click', () => {
console.log(divTeste.children) //HTMLCollection(2) [ul, strong]
// como retorna um array é possível acessar seus índices
console.log(divTeste.children[0]) //<ul>...</ul>
// E também acessar os filhos do índice
console.log(divTeste.children[0].children) //HTMLCollection(2) [li, li]
console.log(divTeste.children[0].children[0]) //<li>...</li>
})


//Manipulando o DOM

btnAltera.addEventListener('click', () => {
    divTeste.children[0].innerHTML += '<li>Item Novo</li>'
    divTeste.children[0].children[1].append(' (alterado)');
    divTeste.children[1].innerHTML = 'Alterado'

    // Criando elemento e adicionando depois do item 4
    const newLi = document.createElement('li');
    newLi.innerText = 'Novo elemento';
    divTeste2.children[0].children[1].after(newLi);
})

// Diferença entre o innerHMTL e o append()
// append() apenas adiciona o item (somente texto);
// InnerHTML junta o novo item com os antigos
// remove tudo e adiciona novamente
