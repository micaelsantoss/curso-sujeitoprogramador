import { connectToDatabase } from './database/connection'; // Importa a função de conexão com o banco de dados, precisa estar entre chaves por que o export não foi feito como default
import verificarConexao from './database/aplicativo'; // Importa a função de verificação de conexão, como foi exportada como default não precisa estar entre chaves, e posso colocar qualquer nome para a função

function criarConexao(){
    connectToDatabase({
        nome: 'MeuBancoDeDados',
        ip: '192.168.0.10'
    })
}

criarConexao(); // Chama a função para criar a conexão com o banco de dados

verificarConexao(); // Chama a função para verificar a conexão com o banco de dados