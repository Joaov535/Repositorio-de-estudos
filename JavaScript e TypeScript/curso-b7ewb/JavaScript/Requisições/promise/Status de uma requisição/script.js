// Promisse =  Promessa

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // Dessa forma vemos o status da requisição
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch((error) => {
            alert('Requisição não efetuada');
            console.log(error);
        })
        .finally(() => {
            alert('Fim da requisição')
        })
}

document.querySelector('button').addEventListener('click', clicou);
