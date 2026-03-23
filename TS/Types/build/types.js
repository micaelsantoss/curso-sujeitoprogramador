"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tecnologia = "JavaScript";
let valor = 10;
let userId = 10;
userId = "10";
let precoProduto;
precoProduto = 10;
precoProduto = true;
let verdadeiroOuFalso = false;
let names = ["Micael", "Adriana"];
let numbers = [1, 2, 3, "4", "5"];
let aluno = ['Micael', 22];
let novoUsuario = {
    nome: "Micael",
    idade: 22,
};
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
;
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["Admin"] = 0] = "Admin";
    StatusPermission[StatusPermission["User"] = 1] = "User";
    StatusPermission[StatusPermission["Support"] = 2] = "Support";
})(StatusPermission || (StatusPermission = {}));
;
let produto;
produto = 10;
let statusAtual = 1;
let mudaStatus = 0;
mudaStatus = statusAtual;
function login(username) {
    let message = `Bem-vindo ${username}`;
    console.log(message);
    return true;
}
let n1 = 10;
let n2 = 20;
function soma(n1, n2) {
    return n1 + n2;
}
const retornoApi = (url) => {
    console.log(`URL da API: ${url}`);
};
retornoApi("https://api.com.br");
function cadastro(nome, senha, email = "coloque seu email", idade) {
    let data = {
        nome: nome,
        email: email,
        senha: senha,
        idade: idade
    };
    console.log(data);
}
cadastro("Micael", 123456);
function somaNumeros(...numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total;
}
console.log(somaNumeros(1, 2, 3, 4, 5));
