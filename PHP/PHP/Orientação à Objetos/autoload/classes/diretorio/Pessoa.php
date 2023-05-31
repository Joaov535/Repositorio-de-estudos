<?php 

namespace classes\diretorio;

class Pessoa {
    
    private $name;
    private $lastName;

    public function __construct($pn, $pl)
    {
        $this->setName($pn);
        $this->setLastName($pl);
    }
    
    public function setName($n) {
        $this->name = $n;
    }

    public function setLastName($l) {
        $this->lastName = $l;
    }

    public function getName() {
        return $this->name;
    }

    public function getLastName() {
        return $this->lastName;
    }

}

?>