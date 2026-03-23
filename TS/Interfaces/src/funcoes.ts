interface CursoProps {
    id: number;
    nome: string;
    preco: number;

    promocao: (preco: number) => void;
}

function novaPromocao(preco: number): void {
    console.log(`O preço do curso agora é: R$ ${preco}`);
}

const novoCurso: CursoProps = {
    id: 1,
    nome: "Curso de futebol",
    preco: 100,
    promocao: novaPromocao
}

console.log(novoCurso);