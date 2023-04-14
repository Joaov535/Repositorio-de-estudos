// Promisse =  Promessa

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        // O método catch() retorna uma Promise e lida apenas com casos rejeitados 
        .catch((error) => {
            alert('Requisição não efetuada');
            console.log(error);
        })
        // O método finally() retorna uma Promise. 
        // Quando a promise for estabelecida, 
        // tenha ela sido realizada ou rejeitada
        // executa-se a função callback especificada.
        .finally(() => {
            alert('Fim da requisição')
        })
}

document.querySelector('button').addEventListener('click', clicou);

// Sintáxe catch()

// p.catch(onRejected);

// p.catch(function(motivo) {
//    // rejeição
// });

// Esta função possui um argumento: reason da rejeição. O motivo da rejeição.