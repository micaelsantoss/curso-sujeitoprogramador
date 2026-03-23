class Pessoa{
    readonly id: string = '123'; // é possível atribuir um valor ao atributo readonly apenas no momento da declaração ou no construtor, mas não é possível alterá-lo depois, pode ser lido em qualquer lugar
    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

}

const pessoa1 = new Pessoa('João', 30);
pessoa1.id = '456'; // erro, não é possível alterar o valor de um atributo readonly
console.log(pessoa1.id); // 123