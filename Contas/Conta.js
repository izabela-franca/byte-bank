//Classe abstrata
export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error('Você não deve instanciar um objeto do tipo conta.')
        }

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }


    //Setters e getters
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    //Operações
    sacar(valorSaque) { //Método abstrato
        throw new Error('O método sacar da Conta é abstrato.')
    }

    _sacar(valorSaque, taxa) {
        const valorComTaxa = taxa * valorSaque;
        if (this._saldo >= valorComTaxa) {
            this._saldo -= valorComTaxa;
            return valorComTaxa;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } //forma alternativa
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}