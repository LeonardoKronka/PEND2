//Objeto: Computador
//Atributos: processador, placa de video, ssd, placa mae, memoria ram, gabinete, fonte, cooler
//Métodos:

class computador {

    constructor(processador, placa_de_video, ssd, placa_mae, memoria_ram, gabinete, fonte, cooler) {

        this.processador = processador;
        this.placa_de_video = placa_de_video;
        this.ssd = ssd;
        this.placa_mae = placa_mae;
        this.memoria_ram = memoria_ram;
        this.gabinete = gabinete;
        this.fonte = fonte;
        this.cooler = cooler;
    }

    //Métodos
    ligar() {
        console.log("O computador está ligando...")
    }
    desligar() {
        console.log("O computador está desligando...")
    }
    reiniciar() {
        console.log("O computador está reiniciando...")
    }
}

const computador1 = new computador("i9 14900ks", "RTX 5090", "SSD kingston 1tb", "Asus ROG Z890", "48gb RAM", "Aquario", "1000W", "Water Cooler lian li 360mm")
console.log("Computador 1: ", computador1)

console.log("-------------------------------");
console.log("Atributos do Computador 1: ");
console.log("- ", computador1.processador);
console.log("- ", computador1.placa_de_video);
console.log("- ", computador1.ssd);
console.log("- ", computador1.placa_mae);
console.log("- ", computador1.memoria_ram);
console.log("- ", computador1.gabinete);
console.log("- ", computador1.fonte);
console.log("- ", computador1.cooler);
console.log("-------------------------------");

computador1.ligar();
computador1.desligar();
computador1.reiniciar();
