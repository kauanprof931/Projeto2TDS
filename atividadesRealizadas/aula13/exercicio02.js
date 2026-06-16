class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInfo(){
        console.log("Nome:  ", this.nome);
        console.log("Salário: ", this.salario);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log("Departamento: ", this.departamento);
    }
}

const gerente = new Gerente("Maria", 5000, "Vendas");
gerente.exibirInfo();