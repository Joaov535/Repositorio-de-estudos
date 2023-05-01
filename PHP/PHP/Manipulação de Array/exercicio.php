<?php 
# Tabela Vertical

$pessoa = [
    'nome' => 'João',
    'idade' => '22 anos',
    'profissao' => 'programador'
];

$valores = array_values($pessoa);
$chaves = array_keys($pessoa);

?>

<h1>Minha resolução</h1>
<table border="1">
    <?php
for($i = 0; $i < count($valores); $i += 1) {
    echo '<tr>';
    echo "<td>$chaves[$i]</td>";
    echo "<td>$valores[$i]</td>";
    echo '</tr>';
}
?>
</table>

<br><br>

<h1>Resolução da aula</h1>
<table border="1">
    <?php foreach($pessoa as $chave => $valor): ?>
        <tr>
            <th><?php echo $chave;?></th>
            <td><?php echo $valor;?></td>
        </tr>
    <?php endforeach; ?>
</table>