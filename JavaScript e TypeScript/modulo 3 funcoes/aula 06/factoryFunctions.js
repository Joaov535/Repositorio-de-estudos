// Factory function


const criaPessoa = (nome, sobrenome, peso, altura) => {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`  // É necessário usar o this para pegar o valor de dentro 
        },                                           // e não diretamente o parâmetro.

        set nomeCompleto(valor) {
            valor = valor.split(' ');   // Divide nos  espaços e joga dentro de um array
            this.nome = valor.shift();  // nome recebe o primeiro valor removido do array
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${nome} está falando sobre ${assunto}`; // vai ser retornado o valor nome 
        },                                                  // passado pelo parâmetro.

        // Getter
        get imc() {                                  // finge ser um atributo
            const indice = peso / altura ** 2;
            return indice.toFixed(1);
        },

        altura,
        peso
    };
}

const p1 = criaPessoa('Cleide', 'Santiago', 73, 1.79);
p1.nomeCompleto = 'João Victor Cruz'
console.log(p1.nomeCompleto);
console.log(p1.fala('JavaScript'));
console.log(`O IMC de ${p1.nome} é ${p1.imc}`);


// Getter:
// A sintaxe de get associa uma propriedade de um objeto
// a uma função que será chamada quando tal propriedade é acessada.

// Setter:
// Em JavaScript, um setter pode ser usado para executar uma função 
// sempre que se tenta mudar uma propriedade específica.
// Setters são geralmente usados em conjunto com getters,
// para criar um tipo de pseudo-propriedade.
// No entanto é impossível ter-se um setter
// para uma propriedade que contenha um valor real.
