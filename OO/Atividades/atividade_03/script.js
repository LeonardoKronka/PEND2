class Produto {

    //Atributos
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //Métodos
    vender() {
        console.log(`${this.nome} está sendo vendido por R$${this.preco}...`)
    }
    repor() {
        console.log(`${this.nome} está sendo reposto...`)
    }
    alterarPreco() {
        console.log(`${this.nome} está tendo o preço alterado...`)
    }
}

const produto1 = new Produto("Notebook", 3000, 10)
console.log("Produto 1: ", produto1)

const produto2 = new Produto("Mouse", 100, 50)
console.log("Produto 2: ", produto2)

const produto3 = new Produto("Teclado", 200, 20)
console.log("Produto 3: ", produto3)

console.log("-------------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Produto 2: ");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Produto 3: ");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("-------------------------------");

produto1.vender();
produto1.repor();
produto1.alterarPreco();

produto2.vender();
produto2.repor();
produto2.alterarPreco();

produto3.vender();
produto3.repor();
produto3.alterarPreco();