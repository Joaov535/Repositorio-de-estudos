<?php 
if(isset($_COOKIE['name'])) {
echo 'Armazenado no Cookie: ' . $_COOKIE['name'];
} else {
    echo 'Nenhum cookie armazenado';
}
?>