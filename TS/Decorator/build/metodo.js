"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const verificaIdade_1 = require("./decorators/verificaIdade");
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cadastraPessoa() {
        console.log(`Pessoa cadastrada: ${this.nome}, Idade: ${this.idade}`);
    }
}
__decorate([
    (0, verificaIdade_1.verificaIdade)(18)
], Pessoa.prototype, "cadastraPessoa", null);
const pessoa1 = new Pessoa("João", 30);
