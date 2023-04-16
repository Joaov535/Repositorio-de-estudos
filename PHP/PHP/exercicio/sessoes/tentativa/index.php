<?php
session_start();
if (empty($_SESSION['nome'])) {
    header('Location: login.php');
    exit;
}

echo 'Olá ' . $_SESSION['nome'] . '<a href="sair.php"> - Sair</a>';
