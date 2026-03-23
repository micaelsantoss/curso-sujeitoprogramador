class Jogo{
    private servidor: string;
    private id: number = 1234;

    constructor(servidor: string){
        this.servidor = servidor;
    }

    // GET, serve para pegar o valor de um atributo de forma indireta
    get getServidor(){
        console.log('SERVIDOR');
        return this.servidor;
    }

    //SET, serve para atribuir um valor a um atributo de forma indireta
    set setServidor(novoServidor: string){
        if(this.servidor == novoServidor){
            throw new Error('Novo servidor não pode ser o mesmo que o atual');
        }

        console.log('ATUALIZANDO SERVIDOR...');
        this.servidor = novoServidor;

        console.log('SERVIDOR ATUALIZADO');
        console.log(`Novo servidor: ${this.servidor}`);
    }
}

const jogo1 = new Jogo('192.168.0.10');

console.log(jogo1.getServidor); 

try{
    jogo1.setServidor = '192.168.0.11';  
} catch(error){
    if (error instanceof Error) {
        console.error("Erro:", error.message);
    } else {
        console.error("Erro desconhecido:", error);
    }
}