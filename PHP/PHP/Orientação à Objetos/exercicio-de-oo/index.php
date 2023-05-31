<?php 
require 'calculadora.php';

$calc = new Calculadora();
$calc->add(5);
$calc->add(6);
$calc->sub(4);
$calc->multi(2);
$calc->div(10);

echo $calc->total();

?>