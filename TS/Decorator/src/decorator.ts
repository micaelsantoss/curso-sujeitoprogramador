/*
    DECORATORS

    Class
    Propriedade
    Métodos
    Parametros ( Pouco Usado )
    Getters / Setters ( Pouco Usado )
*/

// target = receber o construtor da classe
// Padrão Factory (Fabrica), Função que vai retornar a criação do decorator
function logInfo(mensagem: string) {
    return (target: any) => {
        console.log (`${mensagem} - ${target.name}`);
    }
}

@logInfo('Servidor está online')
class Sistema{

}

function setIpServidor(novoIp: string) {

    return (target: any) => {
        return class extends target {
            ip = novoIp;
        }
    }
}
@setIpServidor("192.168.1.1")
class Servidor{

}

const servidor1 = new Servidor();
console.log(servidor1); //
