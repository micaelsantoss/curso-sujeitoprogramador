"use strict";
const produto1 = {
    nome: 'tênis',
    preco: 199.99,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return `O preço do produto ${this.nome} é ${valorFormatado}`;
    }
};
console.log(produto1.formatar(produto1.preco));
