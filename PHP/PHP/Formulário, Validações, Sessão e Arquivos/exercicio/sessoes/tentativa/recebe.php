<?php 
session_start();

$nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);

if($nome) {
    $_SESSION['nome'] = $nome;
    header('Location: index.php');
    exit;
} else {
    header('Location: login.php');
    exit;
}
?>