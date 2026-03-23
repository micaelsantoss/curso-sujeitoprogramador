"use strict";
const MyBurguer = {
    nome: "My Burguer",
    endereco: "Rua das Flores, 123",
    status: true
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja: ${nome}`);
    console.log(`Localização: ${endereco}`);
    console.log(`Status da Loja: ${status}`);
}
novaLoja({ nome: "Sub Lindo", endereco: "Rua dos perdidos, 465", status: true });
let somaProdutos = (num1, num2) => {
    console.log(`Soma dos produtos: ${num1 + num2}`);
    return num1 + num2;
};
const resultado = somaProdutos(10, 20);
console.log(`Resultado da soma: ${resultado}`);
