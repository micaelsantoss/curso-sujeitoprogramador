import { applyMixins } from "./mixin/applyMixin";

class Automovel{
    ligarVeiculo(): void{
        console.log("Veículo ligado!");
    }

    desligarVeiculo(): void{
        console.log("Veículo desligado!");
    }
}

class Especificação{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao;
    }
}

class Carro{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

interface Carro extends Automovel, Especificação{}

applyMixins(Carro, [Automovel, Especificação]);

const carro1 = new Carro("Fiat Bravo");

carro1.ligarVeiculo();
carro1.descricao = "Carro esportivo";
console.log(carro1.nome);
console.log(carro1.descricao);
carro1.desligarVeiculo();
