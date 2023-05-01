<?php
# Montando tabela horizontal

$pessoa = [
    'nome' => 'João',
    'idade' => '22 anos',
    'profissao' => 'programador'
];

$keys = array_keys($pessoa);
$values = array_values($pessoa);
?>

<table border="1">
    <tr>
        <?php foreach ($keys as $chaves) {
            echo "<td>$chaves</td>";
        } ?>
    </tr>

    <tr>
    <?php foreach ($values as $valores) {
            echo "<td>$valores</td>";   
        } ?>
    </tr>
</table>