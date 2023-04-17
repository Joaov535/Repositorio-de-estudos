<?php 
//função que lê arquivos internos ou externos ('endereço do arquivo')
$texto = file_get_contents('texto.txt')
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lendo arquivos</title>
</head>
<body>
    <h1>Texto vindo de um outro arquivo .txt</h1>
    <?php echo $texto?>
</body>
</html>