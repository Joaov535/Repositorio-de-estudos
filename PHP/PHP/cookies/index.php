<?php
session_start();
require('header.php');

if (isset($_SESSION['aviso'])) {
    echo $_SESSION['aviso'];
    $_SESSION['aviso'] = '';
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>

<body>
    <form action="recebe.php" method="post">
        <label for="nameForm">Nome:
            </br>
            <input type="text" name="name" id="nameForm">
        </label>
        <br>
        <br>
        <label for="emailForm">E-mail:
            </br>
            <input type="text" name="email" id="emailForm">
        </label>
        <br>
        <br>
        <label for="telForm">Telefone:
            </br>
            <input type="tel" name="tel" id="telForm">
        </label>
        <br>
        <br>
        <input type="submit" value="Enviar">
    </form>

    <a href="http://localhost/scripts%20php/cookies/mostra.php" target="_blank">Cookies</a>
    <br>
    <br>
    <button onclick="redireciona()">Apagar Cookies</button>
    <script>
        function redireciona() {
            window.location.href = 'apagar.php';
        };
    </script>
</body>

</html>