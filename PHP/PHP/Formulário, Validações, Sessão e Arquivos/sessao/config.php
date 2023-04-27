<?php
// é importante colocar esse comando no inicio
// antes do inicio do código para que a sessão inicie
session_start();

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email');

if ($nome && $email) {
    echo $nome . '<br>' . $email;
} else {
    $_SESSION['aviso'] = 'Faltam Dados';

    header('Location: index.php');
    exit;
}
