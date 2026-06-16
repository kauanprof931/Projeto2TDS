class Carro {
    constructor(modelo, ano, cor, placa){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.placa = placa;
    }

    buzinar(){
        console.log("BI-BIPI");
    }
}

const carro1 = new Carro("Gol", 2014, "Cinza", "ABC-1234");

// Acessando as propriedades do objeto
// console.log não exigido na atividade.
console.log(carro1);

carro1.buzinar();