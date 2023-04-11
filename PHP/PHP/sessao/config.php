<?php
session_start();

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email');

if ($nome && $email) {
    echo $nome . '<br>' . $email;
} else {
    $_SESSION['aviso'] = 'Faltam dados!';

    header('Location: index.php');
    exit;
}
