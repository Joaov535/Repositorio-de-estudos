//var idade = prompt ("Digite sua idade");

//function

function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');
    if(texto == '' || texto == null) {
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem Vindo...'
    }
    else {
        area.innerHTML = 'Bem Vindo ' + texto;
    };
};

function entrar2(nome) {
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome: ');
    if(texto == '' || texto == null) {
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem Vindo...'
    }
    else {
        area.innerHTML = 'Bem Vindo ' + nome + " " + texto;}
    
};

function entrar3(sobrenome) {
    var area = document.getElementById('area3');
    var texto = prompt('Digite sua idade: ');
    area.innerHTML = 'Bem Vindo ' + sobrenome + " , " + texto + " anos";
};