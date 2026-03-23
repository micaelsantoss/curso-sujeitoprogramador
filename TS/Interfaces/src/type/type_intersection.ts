type Info = {
    id: number;
    nome: string;
}

type Detalhes = {
    descricao: string;
    plataforma: string[];
}

type Jogo = Info & Detalhes; // é a interseção (uniao) dos tipos Info e Detalhes

const jogo1: Jogo = {
    id: 1,
    nome: "Rocket League",
    descricao: "Um jogo de futebol com carros",
    plataforma: ["PC", "PS4", "Xbox One"]
}