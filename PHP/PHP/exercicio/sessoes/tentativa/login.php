<?php
session_start();
if(isset($_SESSION['nome'])) {
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
</head>

<body>
    <form action="recebe.php" method="post">
        <input type="text" name="name" id="nameInput">
        <input type="submit" value="Cadastrar">
    </form>
</body>

</html>