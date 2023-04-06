const lutador1 = createKnight('Cavaleiro');
const lutador2 = createMonster();
const lutador1El = document.querySelector('#char');
const lutador2El = document.querySelector('#freak');

stage.start(lutador1, lutador2, lutador1El, lutador2El);
