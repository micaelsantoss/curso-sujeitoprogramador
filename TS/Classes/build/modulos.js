"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection"); // Importa a função de conexão com o banco de dados, precisa estar entre chaves por que o export não foi feito como default
const aplicativo_1 = __importDefault(require("./database/aplicativo")); // Importa a função de verificação de conexão, como foi exportada como default não precisa estar entre chaves, e posso colocar qualquer nome para a função
function criarConexao() {
    (0, connection_1.connectToDatabase)({
        nome: 'MeuBancoDeDados',
        ip: '192.168.0.10'
    });
}
criarConexao(); // Chama a função para criar a conexão com o banco de dados
(0, aplicativo_1.default)(); // Chama a função para verificar a conexão com o banco de dados
