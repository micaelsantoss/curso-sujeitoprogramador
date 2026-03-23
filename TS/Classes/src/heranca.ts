/*
    Existem 4 modificadores de acesso em TypeScript:
    public: Atributos e métodos são acessíveis de qualquer lugar.   
    private: Atributos e métodos são acessíveis apenas dentro da classe onde foram definidos.
    protected: Atributos e métodos são acessíveis dentro da classe onde foram definidos e em classes que herdam dela.
    readonly: Atributos são somente leitura, ou seja, não podem ser modificados após a inicialização.

    os 3 primeiros modificadores de acesso são utilizados para controlar a visibilidade dos atributos e métodos de uma classe.
    Já o readonly não serve para os metodos, apenas nos atributos.
*/

class Usuario {
    protected id: number; //protected permite acesso apenas na classe e nas classes que herdam dela
    public nome: string; //quando não especificamos o modificador de acesso, o padrão é public
    public email: string;

    constructor(id: number, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario{
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number){
        super(id, nome, email); //precisa vir antes dos outros atributos
        //super chama o construtor da classe pai
        
        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const admin1 = new Admin(123, "João", "joao@gmail.com", "Gerente", 1);
console.log(admin1);

admin1.id = 456; //não é possível modificar o id, pois é protected  
admin1.nome = "Maria"; //é possível modificar o nome, pois é public