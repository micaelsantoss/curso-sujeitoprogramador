
class teste{
    constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;        
    }

    apresentar(){
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos`)
    }
}

var testando = new teste('micael', 22)
var teste2 = new teste("mike", 'af')

console.log(testando)
console.log(testando.nome)
testando.apresentar()

console.log(teste2)