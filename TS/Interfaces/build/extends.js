"use strict";
const rocketLeague = {
    id: 1,
    nome: "Rocket League",
    descricao: "Um jogo de futebol com carros",
    plataforma: ["PC", "PS4", "Xbox One"]
};
const rocketLeagueDLC = {
    id: 2,
    nome: "Rocket League - DLC",
    descricao: "Expansão do Rocket League com novos carros e mapas",
    plataforma: ["PC", "PS4", "Xbox One"],
    novoConteudo: ["Novo carro", "Novo mapa"],
    jogoBase: rocketLeague
};
console.log(rocketLeagueDLC);
