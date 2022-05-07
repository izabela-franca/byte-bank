//Importando módulos
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js"
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


/******************************************* Área Clientes *******************************************/

//Declarando Clientes
const cliente1 = new Cliente('Izabela', 11122233344);
const cliente2 = new Cliente('Diego', 11122233355);


//Declarando Conta-Corrente
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);


//Declarando Conta Poupança
const contaPoupancaCliente1 = new ContaPoupanca(cliente1, 1001, 50);
const contaPoupancaCliente2 = new ContaPoupanca(cliente2, 1001, 100);


//Testando Operações de Contas
contaCorrenteCliente1.depositar(200);
contaCorrenteCliente1.sacar(50);
contaCorrenteCliente1.transferir(30, contaCorrenteCliente2);

contaPoupancaCliente1.depositar(20);
contaPoupancaCliente1.sacar(10);
contaPoupancaCliente1.transferir(30, contaPoupancaCliente2);


/****************************************** Área Funcionários ******************************************/

//Declarando Funcionários
const diretor = new Diretor('Ismael', 11122233366, 10000);
const gerente = new Gerente('Vilma', 11122233377, 5500);


//Cadastrando Senhas
diretor.cadastrarSenha('123');
gerente.cadastrarSenha('456');
cliente1.cadastrarSenha('000')


//Testando Operações
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '456');
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, '000');
