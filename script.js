function criaCalculadora() {
    return {
//atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        //metodos
        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if(evento.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('digite um valor valido');
                    return;
                }

                this.display.value = String(conta);
            } catch(erro) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },



        clickBotoes() {
            document.addEventListener('click', function(evento) {
                const el = evento.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
};

const calculadora = criaCalculadora();
calculadora.inicia();