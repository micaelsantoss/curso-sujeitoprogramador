"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    statusLoja(status) {
        console.log(`A loja ${this.nome} está ${status}.`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.forEach((pedido, index) => {
            console.log(`Pedido ${index + 1}: ${pedido}`);
        });
        console.log(`Mesa: ${mesa}`);
    }
}
const redBurguer = new Loja("Red Burguer", "Fast Food");
console.log(redBurguer);
redBurguer.statusLoja("Aberta");
redBurguer.emitirPedido(1, "X-Burguer", "Batata Frita", "Refrigerante");
