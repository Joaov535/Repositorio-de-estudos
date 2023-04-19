<?php 
echo '<pre>';
print_r($_FILES);

// A variável super global $_FILES armazena temporariamente o arquivo enviado e mais 
// Mais informações sobre: https://www.php.net/manual/pt_BR/features.file-upload.post-method.php

// Verificando se é um tipo de arquivo permitido

$permitidos = array('image.jpg','image.jpeg', 'image.png');

if(in_array($_FILES['arquivo']['type'], $permitidos)){
    $code = md5($_FILES['arquivo']['name'].time().rand(0, 1000));
    move_uploaded_file($_FILES['arquivo']['tmp_name'],'arquivos/'.$code.'.png');

    echo 'Arquivo Salvo';
} else {
    echo 'Arquivo Não Permitido!';
}



?>