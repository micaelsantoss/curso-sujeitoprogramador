"use strict";
class contaBanco {
}
class contaCorrente extends contaBanco {
    criarConta(dados) {
        console.log("========================================");
        console.log(`Conta Corrente criada para ${dados.nome}`);
        console.log("========================================");
    }
}
class contaPoupanca extends contaBanco {
    criarConta(dados) {
        console.log(`Conta Poupança criada para ${dados.nome}`);
    }
}
const micael = new contaCorrente();
micael.criarConta({
    nome: "Micael",
    idade: 30,
    email: "micaeltestando@gmail.com",
    endereco: "Rua Teste, 123"
});
