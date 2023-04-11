<h1>Cabeçalho</h1>
<?php
// lendo um cookie
if (isset($_COOKIE['name'])) {
    $cookie_name = $_COOKIE['name'];
    echo '<h2>' . $cookie_name . '</h2>';
}
?>
<hr>