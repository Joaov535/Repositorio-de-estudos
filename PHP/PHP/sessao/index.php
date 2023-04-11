<?php
session_start(); // Utilizar sem
// é importante colocar esse comando no inicio
// antes do inicio do código para que a sessão inicie
require('header.php');
// require tem funcionamento parecido com o include()

// A variável $_SESSION guarda um array
// aqui acessamos um índice que definimos em config.php
if($_SESSION['aviso']) {
    echo $_SESSION['aviso'];
    $_SESSION['aviso'] = '';
}
?>

<form action="config.php" method="post">
    <label for="nome">
        Nome:
        <br>
        <input type="text" name="nome">
    </label>
    <br>
    <br>
    <label for="email">
        E-mail:
        <br>
        <input type="text" name="email">
    </label>
    <br>
    <br>
    <input type="submit" value="Enviar">
</form>

<a href="https://www.php.net/manual/pt_BR/intro.session.php" target="_blank">Info sobre Sessões no PHP</a>