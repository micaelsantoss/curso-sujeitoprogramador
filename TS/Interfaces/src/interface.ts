interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

const MyBurguer: LojaProps = {
    nome: "My Burguer",
    endereco: "Rua das Flores, 123",
    status: true
}

function novaLoja({nome, endereco, status}: LojaProps): void{
    console.log(`Loja: ${nome}`);
    console.log(`Localização: ${endereco}`);
    console.log(`Status da Loja: ${status}`);
}

novaLoja({nome: "Sub Lindo", endereco: "Rua dos perdidos, 465", status: true});

interface SomaProps {
    (num1: number, num2: number): number;
}

let somaProdutos: SomaProps = (num1: number, num2: number): number => {
    console.log(`Soma dos produtos: ${num1 + num2}`);

    return num1 + num2;
}

const resultado = somaProdutos(10, 20);
console.log(`Resultado da soma: ${resultado}`);