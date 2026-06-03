class Pai {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    apresentar() {
        console.log("Nome: ", this.nome, " ", this.sobrenome);
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome, idade) {
        super(nome, sobrenome);
        this.idade = idade;
    }

    apresentar() { 
        super.apresentar(); // Chama o método apresentar da classe Pai
        console.log("Idade: ", this.idade);
    }

    brincar() {
        console.log("Brincando");
    }
}

const pai = new Pai("Carlos", "Silva");

console.log("Objeto pai:");
console.log(pai);

const filho = new Filho("Lucas", "Silva", 10);

console.log("\nObjeto filho:");
console.log(filho);

console.log("\nUsando método apresentar em pai:");
pai.apresentar();
console.log("\nUsando método apresentar em filho:");
filho.apresentar();
console.log("\nUsando método brincar em filho:");
filho.brincar();