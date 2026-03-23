"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = '123'; // é possível atribuir um valor ao atributo readonly apenas no momento da declaração ou no construtor, mas não é possível alterá-lo depois, pode ser lido em qualquer lugar
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa('João', 30);
pessoa1.id = '456'; // erro, não é possível alterar o valor de um atributo readonly
console.log(pessoa1.id); // 123
