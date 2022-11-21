// A função faz papel de molde para quando é chamada
function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.calcula();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.deletaUm();
            if (el.classList.contains('btn-eq')) this.calcula();
            this.display.focus();
        })
    }

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.limpaDisplay = () => this.display.value = '';
    this.deletaUm = () => this.display.value = this.display.value.slice(0, -1);
    this.calcula = () => {
        try {
            const conta = eval(this.display.value);
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida!');
            return
        }
    };
}

// new Calculadora irá tirar/obter um objeto da função.
const calculadora = new Calculadora();
calculadora.inicia();