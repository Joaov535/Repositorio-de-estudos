// https://jsonplaceholder.typicode.com/posts

// ou let clicou = assync () => {}
async function clicou() {
    // o await para a execução do código enquanto a resposta da requisição não é retornada
    let rensponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await rensponse.json();
    alert(`titulo do 1° post: ${json[0].title}`);
    alert('Código escrito depois da requisição');
}

// Inserindo uma informação
async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })

    let json = await response.json();
    console.log(json);

    for (let i in json) {
        if (json.hasOwnProperty(i)) {
            document.body.innerHTML += `<br><br> Resposta da requisição POST: <br> ${i}: ${json[i]}`;
            //O condicional if (json.hasOwnProperty(key)) verifica se a propriedade atual é uma propriedade própria do objeto e não uma propriedade herdada de sua cadeia de protótipos. Isso é importante para garantir que apenas as propriedades do objeto que foram definidas diretamente nele sejam exibidas.
        }
    }
}

document.querySelector('#requisicao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);
