// Promisse =  Promessa

function clicou() {
    // Principais métodos GET, POST, PUT, DELETE
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch((error) => {
            alert('Requisição não efetuada');
            console.log(error);
        })
}

// Inserindo uma informação
function inserir() {
    // o 2° parâmetro é um objeto que especificamos as informações que serão enviadas para a URL
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // a forma como é enviado o conteúdo do body é um json
            },
            // Essa função manda um objeto que é traduzido para json
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
}

document.querySelector('#requisicao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);

// GET
// O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

// POST
// O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

// PUT
// O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

// DELETE
// O método DELETE remove um recurso específico.