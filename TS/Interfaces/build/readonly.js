"use strict";
let produto1 = {
    nome: "Camiseta",
    preco: 29.99
};
produto1.preco = 19.99; // permitido
produto1.nome = "Calça"; // erro, não é permitido modificar o nome
