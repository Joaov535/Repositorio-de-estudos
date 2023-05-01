<?php
# Slice -  Não altera o ponteiro do array. 
$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
echo 'arr original: <br>';
print_r($arr);

$retorno = array_slice($arr, 4, 3);

echo "<br><br> O slice retorna os valores que foram passados nos parâmetros, no caso:<br>";
print_r($retorno);

# Splice - altera o array original

array_splice($arr, 0, 3);
echo '<br><br>Já o splice altera o valor original conforme os parâmetros passados, veja o arr<br>';
print_r($arr);