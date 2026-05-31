// =====================================
// 1. CRIANDO UM OBJETO
// =====================================

const pessoa = {
    nome: "João",
    idade: 25
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

pessoa.idade = 26;

console.log("\nApós alterar idade:");
console.log(pessoa);

// =====================================
// 4. ADICIONANDO NOVOS ATRIBUTOS
// =====================================

pessoa.profissao = "Programador";
pessoa.cidade = "São Paulo";

console.log("\nApós adicionar novos atributos:");
console.log(pessoa);

// =====================================
// 5. ADICIONANDO OBJETOS DENTRO DE OBJETOS
// =====================================

pessoa.endereco = {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro"
};

console.log("\nObjeto com endereço:");
console.log(pessoa);

// Acessando atributo interno
console.log("\nRua:", pessoa.endereco.rua);

// =====================================
// 6. ADICIONANDO MAIS ATRIBUTOS DENTRO DO OBJETO INTERNO
// =====================================

pessoa.endereco.estado = "SP";
pessoa.endereco.pais = "Brasil";

console.log("\nEndereço atualizado:");
console.log(pessoa.endereco);

// =====================================
// 7. ADICIONANDO ARRAY DENTRO DE UM ATRIBUTO
// =====================================

pessoa.hobbies = [
    "Futebol",
    "Música",
    "Programação"
];

console.log("\nHobbies:");
console.log(pessoa.hobbies);

// =====================================
// 8. MANIPULANDO O ARRAY
// =====================================

// Adicionar item
pessoa.hobbies.push("Academia");

// Remover último item
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

pessoa.contatos = [
    {
        nome: "Maria",
        telefone: "1111-1111"
    },
    {
        nome: "Pedro",
        telefone: "2222-2222"
    }
];

console.log("\nContatos:");
console.log(pessoa.contatos);

// Acessando contato específico
console.log("\nPrimeiro contato:");
console.log(pessoa.contatos[0].nome);

// Adicionando novo contato
pessoa.contatos.push({
    nome: "Ana",
    telefone: "3333-3333"
});

console.log("\nContatos após adicionar Ana:");
console.log(pessoa.contatos);

// =====================================
// 11. OBJETO FINAL COMPLETO
// =====================================

console.log("\nObjeto completo:");
console.log(JSON.stringify(pessoa, null, 4));