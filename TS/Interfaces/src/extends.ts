interface JogoProps {
    readonly id: number;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const rocketLeague: JogoProps = {
    id: 1,
    nome: "Rocket League",
    descricao: "Um jogo de futebol com carros",
    plataforma: ["PC", "PS4", "Xbox One"]
}

interface JogoDLC extends JogoProps {
    jogoBase: JogoProps;
    novoConteudo: string[];
}

const rocketLeagueDLC: JogoDLC = {
    id: 2,
    nome: "Rocket League - DLC",
    descricao: "Expansão do Rocket League com novos carros e mapas",
    plataforma: ["PC", "PS4", "Xbox One"],
    novoConteudo: ["Novo carro", "Novo mapa"],
    jogoBase: rocketLeague
}

console.log(rocketLeagueDLC);