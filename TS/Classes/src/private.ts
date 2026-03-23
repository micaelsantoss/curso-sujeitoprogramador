class Conta{
    private limite: number = 500; // private significa que o atributo só pode ser acessado dentro da própria classe

    private aumentarLimite(valor: number): void{
        if(valor < 1000){
            this.limite = valor;
            console.log(`Limite aumentado para: ${this.limite}`);
        }else if(valor > 1000){
            console.log("Valor do limite excede o permitido");
        }
    }

    protected solicitarLimite(valor: number){
        return this.aumentarLimite(valor);
    }

    solicitarLimiteApp(estaAutenticado: boolean, valor: number): void {
        if(estaAutenticado){
            this.solicitarLimite(valor);
        } else {
            console.log("Usuário não autenticado");
        }
    }
}

class ContaEspecial extends Conta {
    limiteContaErro(){
        return this.aumentarLimite(1000); // Acesso negado, pois é private
    }
    
    limiteContaOk(valor: number){
        return this.solicitarLimite(valor); // Acesso permitido, pois é protected
    }
}


const usuario1 = new Conta();
console.log(usuario1.limite)    //não é possível acessar o limite, pois é private
usuario1.solicitarLimiteApp(true, 800); // Limite aumentado para: 800

const usuario2 = new ContaEspecial();
console.log(usuario2)
usuario2.limiteContaOk(900); // Acesso permitido, pois é protected