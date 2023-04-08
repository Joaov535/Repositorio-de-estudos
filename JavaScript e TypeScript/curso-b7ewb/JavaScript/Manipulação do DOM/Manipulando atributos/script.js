const input = document.querySelector('#inputText');
const inputPass = document.querySelector('#inputPass');
const button = document.querySelector('#exibir');
const buttonYes = document.querySelector('#btnyes');
const buttonPass = document.querySelector('#passVisibility');

const atributo = 'type'

button.addEventListener('click', () => {
    // Pega o atributo
    console.log('Exibindo atributo: ', input.getAttribute(atributo));
    // Verifica se tem o atributo e retorna boolean
    if(input.hasAttribute('placeholder')) {
        console.log('Tem Placeholder');
    }
})

buttonPass.addEventListener('click', () => {
    if(inputPass.getAttribute('type') == 'password') {
        inputPass.setAttribute('type', 'text');
        buttonPass.innerText = 'Ocultar Senha';
    } else {
        inputPass.setAttribute('type', 'password');
        buttonPass.innerText = 'Mostrar Senha';
    }
})

buttonYes.addEventListener('click', () => {
    alert('Conteúdo apagado!')
    document.body.innerHTML = '';
})
