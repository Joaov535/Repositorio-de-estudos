// Modelo de Personagem

const defaultChar = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultChar,
        name,
        life: 100,
        maxLife: 100,
        attack: 8,
        defense: 10
    }
}

const createWizard = (name) => {
    return {
        ...defaultChar,
        name,
        life: 120,
        maxLife: 120,
        attack: 12,
        defense: 2
    }
}

const createHaunt = () => {
    return {
        ...defaultChar,
        name: 'Assombração',
        life: 180,
        maxLife: 180,
        attack: 8,
        defense: 1
    }
}

const createMonster = () => {
    return {
        ...defaultChar,
        name: 'Monstro',
        life: 80,
        maxLife: 80,
        attack: 8,
        defense: 12
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1,
            this.fighter2 = fighter2,
            this.fighter1El = fighter1El,
            this.fighter2El = fighter2El

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update() {
        // Lutador 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed()}`;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`;
        // Lutador 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed()}`;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`;
    },

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('A luta terminou.');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(4);
        const defenseFactor = (Math.random() * 2).toFixed(4);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} deu ${actualAttack} de dano`)
        } else {
            log.addMessage(`${attacked.name} defendeu o ataque!`);
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        let logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
