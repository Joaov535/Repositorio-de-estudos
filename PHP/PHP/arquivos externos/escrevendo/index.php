<?php  
$texto = 'João';

// Quando o script for executado a função pega a variável e joga em 'arquivo.txt'
file_put_contents('arquivo.txt', $texto);

echo 'Arquivo criado';
?>