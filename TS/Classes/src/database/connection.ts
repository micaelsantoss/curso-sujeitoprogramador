type dadosBanco = {
    nome: string;
    ip: string;
}

export function connectToDatabase(dados: dadosBanco): void {
    console.log(`Conectando ao banco de dados ${dados.nome} no IP ${dados.ip}`);
    // Aqui você pode adicionar a lógica real de conexão ao banco de dados
    // Por exemplo, usando uma biblioteca como mongoose para MongoDB ou pg para PostgreSQL
}
    