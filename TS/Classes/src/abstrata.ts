type dadosUsuario = {
    nome: string;
    idade: number;
    email: string;
    endereco: string;
}

abstract class contaBanco{

    abstract criarConta(dados: dadosUsuario): void;
}

class contaCorrente extends contaBanco{

    criarConta(dados: dadosUsuario): void {
        console.log("========================================");
        console.log(`Conta Corrente criada para ${dados.nome}`);
        console.log("========================================");
    }
}

class contaPoupanca extends contaBanco{

    criarConta(dados: dadosUsuario): void {
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