<?php 
session_start();
if(!empty($_SESSION['aviso'])) {
    echo $_SESSION['aviso'] . '<hr>';
}
unset($_SESSION['aviso']);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: 	#483D8B;
            color:azure
        }
    </style>
</head>
<body>
    <div>
        <form action="recebe.php" method="post">
        <input type="text" name="nome" id="nomeInput">
        <input type="submit" value="Adicionar">
        </form>
    </div>
    <hr>
    <h1>Lista de nomes</h1>
    <ul>
        <?php
        $lista = file_get_contents('nomes.txt');
        $nomes_arr = explode(', ', $lista);
        foreach($nomes_arr as $item) {
            echo '<li>'.$item.'</li>';
            }
            ?>
    </ul>
    
</body>
</html>