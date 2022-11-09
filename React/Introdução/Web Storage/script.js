var nome = '';

if(typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt("Digíte seu nome");
}

nome = localStorage.nome;

document.getElementById('nome').innerHtml = nome;

//localStorage   salva no navegador
//sessionStorage  salva na sessão