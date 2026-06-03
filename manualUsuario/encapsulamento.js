// ========================================
// Primeiro exemplo da Aula
// ========================================

// class ContaBancaria {
//     #saldo = 0; // Atributo privado

//     depositar(valor) {
//         if (valor > 0) {
//             this.#saldo += valor;
//         }
//     }
// }
// const conta = new ContaBancaria();
// console.log(conta.#saldo);
// // // Erro: Atributo privado não pode ser acessado diretamente


// ========================================
// Segundo exemplo da Aula
// ========================================

// class Usuario {
//     #nome;
//     constructor(nome) {
//         this.#nome = nome;
//     }

//     get nome() {
//         return this.#nome;
//     }
// }

// const usuario = new Usuario("João");
// console.log(usuario.nome); // Acessa o nome usando o getter

// ========================================
// Terceiro exemplo da Aula
// ========================================

// class Produto {
//     #preco;
//     set preco(valor) {
//         if (valor > 0) {
//             this.#preco = valor;

//         } else {
//             console.log("Preço inválido!");

//         }
//     }
// }

// const produto = new Produto();
// produto.preco = -50; // Tenta definir um preço inválido

// ========================================
// Quarta exemplo da Aula
// ========================================

class Login {
    #senha; // Atributo privado
    constructor(user, pass) {
        this.usuario = user;
        this.#senha = pass;
    }
    autenticar(tentativa) {
        return tentativa === this.#senha;
    }
}
const conta = new Login("admin", "1234");
console.log(conta.autenticar("1234")); // true