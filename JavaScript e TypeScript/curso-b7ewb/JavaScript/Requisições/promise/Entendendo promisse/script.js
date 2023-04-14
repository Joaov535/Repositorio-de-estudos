// Promisse =  Promessa

function clicou() {
    // A função fetch retorna uma promessa
    let req = fetch('https://jsonplaceholder.typicode.com/posts');
    // a requisição foi armazenada na variavel
    // quando a respota chegar o then() é executado
    req.then((response) => {
        return response.json();
    })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
    // Enquanto a resposta da requisição não chega 
    // o restante do código é executado 
    alert('Código escrito depois do fetch()')
}

document.querySelector('button').addEventListener('click', clicou)

// Promisse é um objeto
// mas é um objeto que diz que a resposta final é uma promessa
// ou seja, que acontece no futuro

