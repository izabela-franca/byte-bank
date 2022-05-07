import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valorSaque) {
        let taxa = 1.05;
        return this._sacar(valorSaque, taxa);
    }
}