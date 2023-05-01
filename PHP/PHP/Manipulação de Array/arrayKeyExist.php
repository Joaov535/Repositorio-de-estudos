<?php 
// testando se a chave de um array existe
$pessoa = [
    'nome' => 'João',
    'idade' => '22 anos',
    'profissao' => 'programador'
];

// 1° parâmetro a chave que deseja encontrar
// 2° parâmetro onde será feita a busca
if(key_exists('idade', $pessoa)) {
    echo 'chave encontrada';
} else {
    echo 'chave não encontrada';
}

?>