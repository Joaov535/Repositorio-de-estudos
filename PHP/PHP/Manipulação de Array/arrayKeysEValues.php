<?php 

$pessoa = [
    'nome' => 'João',
    'idade' => '22 anos',
    'profissao' => 'programador'
];

$keys = array_keys($pessoa);
$values = array_values($pessoa);

echo 'Conteúdo de $keys: ';
foreach($keys as $key) {
    echo "$key, ";
}

echo '<br> Conteúdo de $values: ';
foreach($values as $key) {
    echo $key.', ';
}
