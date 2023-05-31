<?php

// Polimorfismo 
// Poli -> Várias, muitas
// morfi -> Formas

interface Forma
{
    public function getTipo();
    public function getArea();
}

class Circulo implements Forma
{

    private $raio;

    public function __construct($r)
    {
        $this->raio = $r;
    }

    public function getTipo()
    {
        return "Quadrado";
    }

    public function getArea()
    {
        return round(pi() * $this->raio ** 2, 2);
    }
}

class Retangulo implements Forma
{
    private $altura;
    private $largura;

    public function __construct($h, $l)
    {
        $this->altura = $h;
        $this->largura = $l;
    }

    public function getTipo()
    {
        if ($this->altura == $this->largura) {
            return "Quadrado";
        } else {
            return "retângulo";
        }
    }

    public function getArea()
    {
        return round($this->largura * $this->altura, 2);
    }
}

$circulo = new Circulo(3);
$retangulo = new Retangulo(3, 5);


$objetos = [
    $circulo,
    $retangulo
];

foreach ($objetos as $figura) {
    $tipo = $figura->getTipo();
    $area = $figura->getArea();

    echo "Tipo: " . $tipo . " -> Área: " . $area . "</br>";
}
