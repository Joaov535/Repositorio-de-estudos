function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}

firstLetterUpperCase('joão');

//                                    type do retorno da função
function somar(n1: number, n2: number): number {
    const soma: number = n1 + n2;
    return soma;
}

let res: number = somar(12, 5);