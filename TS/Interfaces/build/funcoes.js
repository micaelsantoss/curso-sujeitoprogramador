"use strict";
function novaPromocao(preco) {
    console.log(`O preço do curso agora é: R$ ${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "Curso de futebol",
    preco: 100,
    promocao: novaPromocao
};
console.log(novoCurso);
