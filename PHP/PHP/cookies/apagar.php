<?php 
// Para apagar um cookie basta setalo com tempo no passado
setcookie('name', '', time() - 3600); // 3600ms é 1 minuto

header('Location: index.php');
exit;
