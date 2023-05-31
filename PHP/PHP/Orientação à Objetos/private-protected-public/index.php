<?php 

// Se o membro da classe for declarado como público, ele poderá ser acessado em qualquer lugar.
// Se os membros da classe forem declarados como protegidos, ela poderá ser acessada apenas dentro da própria classe e por classes herdadas e pai.
//Se os membros da classe forem declarados como privados, ela só poderá ser acessada pela classe que define o membro.


class Post {
    private int $id;
    private int $likes = 0;

    protected function setId($i) {
        $this->id = $i;
    }

    public function getId(){
        return $this->id;
    }

    public function setLikes($n) {
        $this->likes = $n;
    }

    public function getLikes() {
        return $this->likes;
    }
}

class Photo extends Post {
    // Podemos criar novas variáveis para essa classe filha de Post
    private string $url;

    public function __construct($id) {
        $this->setId($id);
    }


    public function setUrl($u) {
        $this->url = $u;
    }

    public function getUrl() {
        return $this->url;
    }
}

$foto = new Photo(1234);
$foto->setUrl('foto.com');
$foto->setLikes(128);

echo "Nova postagem: ".$foto->getId()." tem ".$foto->getLikes()." likes ".$foto->getUrl();

?>

