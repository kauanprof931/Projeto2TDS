// =====================================
// 1. CRIANDO UM OBJETO
// =====================================

const pessoa = {
    nome: "João",
    idade: 22
};

console.log("Objeto inicial:");
console.log(pessoa);

// =====================================
// 2. ACESSANDO ATRIBUTOS
// =====================================

console.log("\nNome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// Outra forma de acessar
console.log("Nome (colchetes):", pessoa["nome"]);

// =====================================
// 3. ALTERANDO ATRIBUTOS
// =====================================

pessoa.idade = 23;

console.log("\nApós alterar idade:");
console.log(pessoa);

// =====================================
// 4. ADICIONANDO NOVOS ATRIBUTOS
// =====================================

pessoa.profissao = "Desenvolvedor";
pessoa.cidade = "Umuarama";

console.log("\nApós adicionar novos atributos:");
console.log(pessoa);

// =====================================
// 5. ADICIONANDO OBJETOS DENTRO DE OBJETOS
// =====================================

pessoa.endereco = {
    rua: "Rua das Flores",
    numero: 1234,
    bairro: "Centro"
};

console.log("\nObjeto com endereço:");
console.log(pessoa);

// Acessando atributo interno
console.log("\nRua:", pessoa.endereco.rua);

// =====================================
// 6. ADICIONANDO MAIS ATRIBUTOS DENTRO DO OBJETO INTERNO
// =====================================

pessoa.endereco.estado = "PR";
pessoa.endereco.pais = "Brasil";

console.log("\nEndereço atualizado:");
console.log(pessoa.endereco);

// =====================================
// 7. ADICIONANDO ARRAY DENTRO DE UM ATRIBUTO
// =====================================

pessoa.hobbies = [
    "Basquete",
    "Música",
    "Programação"
];

console.log("\nHobbies:");
console.log(pessoa.hobbies);

// =====================================
// 8. MANIPULANDO O ARRAY
// =====================================

// Adicionar um novo hobby
pessoa.hobbies.push("Academia");

// Remover último hobby
// pessoa.hobbies.pop();

console.log("\nHobbies atualizados:");
console.log(pessoa.hobbies);

// =====================================
// 9. OBJETO DENTRO DE OBJETO DENTRO DE OBJETO
// =====================================

pessoa.configuracoes = {
    tema: {
        cor: "Azul",
        fonte: "Arial"
    }
};

console.log("\nCor do tema:");
console.log(pessoa.configuracoes.tema.cor);

// Alterando valor interno
pessoa.configuracoes.tema.cor = "Verde";

console.log("\nTema atualizado:");
console.log(pessoa.configuracoes);

// =====================================
// 10. ARRAY DE OBJETOS
// =====================================

pessoa.contatos = {
    email: ["joao@email.com", "joao@outroemail.com"],
    telefone: ["1234-5678", "9876-5432"]
}

console.log("\nContatos:");
console.log(pessoa.contatos);

// Acessando contato específico
console.log("\nPrimeiro contato:");
console.log(pessoa.contatos.email[0]);

// Adicionando novo email
pessoa.contatos.email.push("joao@novemail.com");

console.log("\nContatos após adicionar novo email:");
console.log(pessoa.contatos);

// =====================================
// 11. OBJETO FINAL COMPLETO
// =====================================

console.log("\nObjeto completo:");
console.log(JSON.stringify(pessoa, null, 4));