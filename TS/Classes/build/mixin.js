"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligarVeiculo() {
        console.log("Veículo ligado!");
    }
    desligarVeiculo() {
        console.log("Veículo desligado!");
    }
}
class Especificação {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificação]);
const carro1 = new Carro("Fiat Bravo");
carro1.ligarVeiculo();
carro1.descricao = "Carro esportivo";
console.log(carro1.nome);
console.log(carro1.descricao);
carro1.desligarVeiculo();
