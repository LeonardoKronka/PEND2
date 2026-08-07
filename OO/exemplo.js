// Classe - Modelo que criamos para começar a trabalhar com Orientação a Objetos
class Carro {

    // Atributos - Características do objeto
    //marca;
    //modelo;
    //ano;
    //cor;

    // Constructor - Método especial que é chamado no momento da criação do objeto
    constructor(marca, modelo, ano, cor) {

        // Atribuindo os valores passados como parâmetro para os atributos do objeto
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    // Métodos - Ações que o objeto pode realizar
    ligar() {
        console.log(`${this.modelo} ${this.ano} ${this.cor} ligado!`);
    }
    // Acelerar - Ação de acelerar o carro
    acelerar() {
        console.log(`${this.modelo} ${this.ano} ${this.cor} acelerou!`);
    }
    // Frear - Ação de frear o carro
    frear() {
        console.log(`${this.modelo} ${this.ano} ${this.cor} freiou!`);
    }

}

// Criando objetos a partir da classe Carro
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

// Criando outro objeto a partir da classe Carro
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

// Carro 3
const carro3 = new Carro("Honda", "Civic", 2023, "Prata");
console.log("Carro 3: ", carro3);


console.log("-------------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------------");


// Carro 1 ligando
carro1.ligar();
// Carro 1 acelerando
carro1.acelerar();
// Carro 1 freando
carro1.frear();
// Carro 2 ligando
carro2.ligar();
// Carro 2 acelerando
carro2.acelerar();
// Carro 2 freando
carro2.frear();
// Carro 3 ligando
carro3.ligar();
// Carro 3 acelerando
carro3.acelerar();
// Carro 3 freando
carro3.frear();