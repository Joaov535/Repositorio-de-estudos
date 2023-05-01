<?php 
// $array = range(10, 50, 2);
$array = range('a', 'z', 4);
// 1° parâmetro - onde começa
// 2° parâmetro onde termina
// 3° passo

foreach ($array as $item) {
    echo "$item <br>";
}
?>