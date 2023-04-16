<?php 
session_start();
$nome_input = filter_input(INPUT_POST, 'nome',FILTER_SANITIZE_SPECIAL_CHARS);

if($nome_input) {
    $lista = file_get_contents('nomes.txt');
    $nomes = $nome_input.', '.$lista;

    file_put_contents('nomes.txt', $nomes);
    header('Location: index.php');
    exit;
} else{
    $_SESSION['aviso'] = 'Preencha os dados';
    header('Location: index.php');
    exit;
}
?>