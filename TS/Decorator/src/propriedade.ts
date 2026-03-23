function validaNome (tamanho: number){

    return (target: any, key: string) => {
        //target: construtor da classe
        //key: nossa propriedade

        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) => {
            if (value === ""){
                console.log(`O campo ${key} não pode ser vazio`);
            }else if (value.length < tamanho) {
                console.log(`O campo ${key} deve ter no mínimo ${tamanho} caracteres`);
            }else {
                console.log(`O campo ${key} foi preenchido corretamente`);
                valor = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class Jogo {
    // Decorator aplicado a propriedade nome
    @validaNome(5)
    nome: string;

    @validaNome(15)
    descricao: string;

    constructor (nome: string, descricao: string){
        this.nome = nome;
        this.descricao = descricao;
    }
}

const jogo1 = new Jogo("The Legend of Zelda", "A classic adventure game");
console.log(jogo1.nome);