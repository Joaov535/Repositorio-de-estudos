<?php 

// Para funcionar o autoload o namespace tem que ser o nome da pasta
// e a classe o nome do arquivo

require 'autoload.php';

use classes\diretorio\sobreNamespace\Classe4 as Classe;

$a = new classes\Classe1();
$b = new classes\Classe2();
$c = new classes\diretorio\outroDiretorio\Classe3();
$d = new Classe();
$e = new classes\diretorio\Pessoa('João', 'Cruz');


echo $a->testar().'</br>';
echo $b->testar().'</br>';
echo $c->teste().'</br>';
echo $d->sobre().'</br>';
echo $e->getName();
echo $e->getLastName();



?>