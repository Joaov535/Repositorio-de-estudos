<?php
$nome = filter_input(INPUT_POST, 'nome');
$idade = filter_input(INPUT_POST, 'idade', filter_sa);

print_r($nome.'<br>');
print_r($idade);