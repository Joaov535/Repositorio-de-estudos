let botao = document.querySelector('.btnReq');
let divBtn = document.querySelector('.divBtn');
let res = document.querySelector('.res');


botao.addEventListener('click', () => {
    console.log('Clicou');
    // then() é utilizado quando há uma promise
    // ou seja, quando a resposta chegar será executado o then()
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        criaBtn();
        document.querySelector('#btnRes').addEventListener('click', () => {
            for(let i in data) {
                res.innerHTML += `</br>Nome: ${data[i].name}`;
            }
        })
    })
})

function criaBtn() {
    let newBtn = document.createElement('button');
    newBtn.setAttribute('id','btnRes');
    newBtn.innerHTML = 'Mostrar nome';
    divBtn.appendChild(newBtn)
}