class Aluno {

    //Atributos
    constructor(nome, idade, curso, matrícula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matrícula = matrícula;
    }

    //Métodos
    aprender() {
        console.log("O aluno está aprendendo...")
    }
    estudar() {
        console.log("O aluno está estudando...")
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, curso ${this.curso} e minha matrícula é ${this.matrícula}.`)
    }
}

const aluno1 = new Aluno("João", 17, "Garoto de programa", "676767")
console.log("Aluno 1: ", aluno1)

const aluno2 = new Aluno("Marcelo", 18, "Mexedor de Farinha", "767676")
console.log("Aluno 2: ", aluno2)

const aluno3 = new Aluno("Cauazinho", 3, "Criança", "424242")
console.log("Aluno 3: ", aluno3)

console.log("-------------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matrícula);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Aluno 2: ");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matrícula);
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Atributos do Aluno 3: ");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matrícula);
console.log("-------------------------------");

aluno1.apresentar();
aluno1.aprender();
aluno1.estudar();

aluno2.apresentar();
aluno2.aprender();
aluno2.estudar();

aluno3.apresentar();
aluno3.aprender();
aluno3.estudar();