interface NovoProduto<T extends number> {
    nome: string;
    preco: T;

    formatar (valor: T): string;
}

const produto1: NovoProduto<number> = {
    nome: 'tênis',
    preco: 199.99,

    formatar(valor: number): string {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        return `O preço do produto ${this.nome} é ${valorFormatado}`;
    }
}

console.log(produto1.formatar(produto1.preco));