/*estrutura conta bancária: nessa atividade, vamos testar os conceitos de "orientação a objetos". simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma*/

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero =numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo (){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo) {
            return "operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero,);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito() {
        return this._CartaoCredito;
    }

    set cartaoCredito(valor) {
        this.cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
     if(valor > 500) {
        return "operação negada"
    }

    this._saldo = this._saldo - valor;
    }
}



