<?php 

require 'classe1.php';
require 'classe2.php';
require 'diretorio/outroDiretorio/classe3.php';
require 'diretorio/sobreNamespace/classe4.php';

use diretorio\sobreNamespace\UmaClasse as Classe;

$a = new classe1\MinhaClasse();
$b = new classe2\MinhaClasse();
$c = new diretorio\outroDiretorio\UmaClasse();
$d = new Classe();

echo $a->testar().'</br>';
echo $b->testar().'</br>';
echo $c->teste().'</br>';
echo $d->sobre()

?>