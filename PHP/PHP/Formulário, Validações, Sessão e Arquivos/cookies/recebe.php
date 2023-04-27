<?php
session_start();

$nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$telefone = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_NUMBER_INT);

// Para setar um cookie é extremamante importante   
//  fazer isso antes do qualquer exibição de conteúdo

if ($nome && $email && $telefone) {
    // aqui setamos o tempo de expiração do cookie
    $expira = time() + (86400 * 30); // 86400 é 1 dia em milisegundos.
    //Setando um cookie
    setcookie('name', $nome, $expira);
    // a função aceita 3 parâmetros
    // 1° o nome do cookie
    // 2° o que vai ser armazenado no cookie
    // 3° quanto o cookie expira
    echo 'Nome: ' . $nome . '</br>';
    echo 'E-mail: ' . $email . '</br>';
    echo 'Telefone: ' . $telefone . '</br>';
} else {
    $_SESSION['aviso'] = 'Faltam dados';

    header("Location: index.php");
    exit;
}
