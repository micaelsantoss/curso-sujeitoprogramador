type Status = "Aberta" | "Fechada";


class Loja{
    nome: string;
    categoria: string;

    constructor(nome: string, categoria:string){
        this.nome = nome;
        this.categoria = categoria;
    }

    statusLoja(status: Status): void {
        console.log(`A loja ${this.nome} está ${status}.`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): void {
        pedidos.forEach((pedido, index) => {
            console.log(`Pedido ${index + 1}: ${pedido}`);
        })

        console.log(`Mesa: ${mesa}`);
    }
}

const redBurguer = new Loja("Red Burguer", "Fast Food");

console.log(redBurguer);

redBurguer.statusLoja("Aberta");
redBurguer.emitirPedido(1, "X-Burguer", "Batata Frita", "Refrigerante");