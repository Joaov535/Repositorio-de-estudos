<?php 
# https://www.php.net/manual/en/function.array-reduce.php

$pessoas = [
    ['nome' => 'Fulano', 'sexo' => 'm', 'nota' => 9],    
    ['nome' => 'Cilcano', 'sexo' => 'f', 'nota' => 4],    
    ['nome' => 'Beltrano', 'sexo' => 'm', 'nota' => 6],    
    ['nome' => 'Taciano', 'sexo' => 'f', 'nota' => 1],    
    ['nome' => 'Melindrano', 'sexo' => 'f', 'nota' => 6],    
    ['nome' => 'Juciano', 'sexo' => 'm', 'nota' => 4]    
];

    // Criando função que será usada no reduce
    function contar_m($subtotal, $item) {
        if($item['sexo'] === 'm') {
            $subtotal++;
        }
        return $subtotal;
    }

    // Criando função que soma a nota dos homens
    function soma_m($acumulador, $item) {
        if($item['sexo'] === 'm') {
            $acumulador += $item['nota'];
        }
        return $acumulador;
    }

    $total_m = array_reduce($pessoas, 'contar_m');
    $nota_m = array_reduce($pessoas, 'soma_m');

    echo "total de homens: $total_m </br>";
    echo "A soma das notas dos homens foi: $nota_m";

?>