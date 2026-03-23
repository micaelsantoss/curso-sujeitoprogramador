interface TecnologiaProps {
    id: number;
    nome: string;
    descricao?: string;
}

interface NomeProps {
    tecnologias: TecnologiaProps[];
}

let frontEnd: NomeProps = {
    tecnologias: [
        {
            id: 1,
            nome: "HTML",
            descricao: "Linguagem de marcação para estruturação de páginas web"
        },
        {
            id: 2,
            nome: "CSS",
            descricao: "Linguagem de estilo para apresentação de páginas web"
        },
        {
            id: 3,
            nome: "JavaScript",
            descricao: "Linguagem de programação para desenvolvimento web"
        }
    ]
}

console.log(frontEnd);