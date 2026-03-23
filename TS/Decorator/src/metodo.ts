import { verificaIdade } from './decorators/verificaIdade';

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    @verificaIdade(18)
    cadastraPessoa(){
        console.log(`Pessoa cadastrada: ${this.nome}, Idade: ${this.idade}`);
    }

}

const pessoa1 = new Pessoa("João", 30);