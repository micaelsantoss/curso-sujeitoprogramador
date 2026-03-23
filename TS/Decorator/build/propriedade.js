"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validaNome(tamanho) {
    return (target, key) => {
        //target: construtor da classe
        //key: nossa propriedade
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value === "") {
                console.log(`O campo ${key} não pode ser vazio`);
            }
            else if (value.length < tamanho) {
                console.log(`O campo ${key} deve ter no mínimo ${tamanho} caracteres`);
            }
            else {
                console.log(`O campo ${key} foi preenchido corretamente`);
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Jogo {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
__decorate([
    validaNome(5)
], Jogo.prototype, "nome", void 0);
__decorate([
    validaNome(15)
], Jogo.prototype, "descricao", void 0);
const jogo1 = new Jogo("The Legend of Zelda", "A classic adventure game");
console.log(jogo1.nome);
