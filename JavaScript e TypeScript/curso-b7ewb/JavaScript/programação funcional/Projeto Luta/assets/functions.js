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
        defense: 15
    }
}
