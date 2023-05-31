<?php 

class Calculadora {

    private $acc = 0;

    public function add($n) {
        $this->acc += $n;  
    }

    public function sub($n) {
        $this->acc -= $n;
    }

    public function multi($n) {
        $this->acc = $this->acc * $n;
    }

    public function div($n) {
        $this->acc = $this->acc / $n;
    }

    public function total() {
        return $this->acc;
    }
}

?>