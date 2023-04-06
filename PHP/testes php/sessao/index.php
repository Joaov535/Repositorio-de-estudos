<?php
session_start();
require('header.php');

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