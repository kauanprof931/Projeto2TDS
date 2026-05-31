// =====================================
// 1. CRIANDO A CLASSE PESSOA
// =====================================

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método da classe
    apresentar() {
        console.log(
            `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`
        );
    }
}

// =====================================
// 2. CRIANDO UM OBJETO DA CLASSE
// =====================================

const pessoa1 = new Pessoa("João", 25);

console.log("Objeto criado:");
console.log(pessoa1);

// =====================================
// 3. USANDO OS ATRIBUTOS
// =====================================

console.log("\nNome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);

// Alterando atributo
pessoa1.idade = 26;

console.log("\nNova idade:", pessoa1.idade);

// =====================================
// 4. USANDO O MÉTODO
// =====================================

console.log("\nExecutando método:");
pessoa1.apresentar();

// =====================================
// 5. CRIANDO UMA CLASSE FILHA
// =====================================

class Estudante extends Pessoa {

    constructor(nome, idade, curso) {

        // Chama o construtor da classe pai
        super(nome, idade);

        // Novo atributo da classe filha
        this.curso = curso;
    }

    // Novo método da classe filha
    estudar() {
        console.log(
            `${this.nome} está estudando ${this.curso}.`
        );
    }
}

// =====================================
// 6. CRIANDO UM ESTUDANTE
// =====================================

const estudante1 = new Estudante("Maria", 20, "Back-End");

console.log("\nObjeto estudante:");
console.log(estudante1);

// =====================================
// 7. USANDO ATRIBUTOS HERDADOS
// =====================================

console.log("\nNome:", estudante1.nome);
console.log("Idade:", estudante1.idade);
console.log("Curso:", estudante1.curso);

// =====================================
// 8. USANDO MÉTODO HERDADO
// =====================================

console.log("\nMétodo herdado:");
estudante1.apresentar();

// =====================================
// 9. USANDO MÉTODO DA CLASSE FILHA
// =====================================

console.log("\nMétodo próprio:");
estudante1.estudar();