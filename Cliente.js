export class Cliente {
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
}
