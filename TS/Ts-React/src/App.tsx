import { Header } from "./components/Header"
import { Aluno } from "./components/Aluno"
import { useState } from "react"

interface infoAlunosProps{
  nome: string;
  idade: number;
}

function App() {
  const[input, setInput] = useState("");
  const[idade, setIdade] = useState("");
  const[dadosAluno, setDadosAluno] = useState<infoAlunosProps>();
  const[contador, setContador] = useState(0);

  function mostrarAluno() {
    setDadosAluno({
      nome: input,
      idade: parseInt(idade)
    });
  }

  function incrementaContador() {
    setContador(contador + 1);
  }

  function decrementaContador() {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);
  }

  return (
    <div>
      <Header title="Testando Primeira Vez"/>
      <Aluno nome="Micael" idade={23}/>
      <Aluno nome="Adriana" idade={21}/> <hr /> <br /><br />

      <h2>Testando useState</h2>

      <input
        placeholder="Digite seu nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> <br /> 

      <input
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      /> <br /> <br />
      
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <hr />

      <h3>Bem vindo: {dadosAluno?.nome} </h3>
      <h3>Idade:  {dadosAluno?.idade} </h3>
      <hr /> <br />

      <h2>Contador</h2>
      <button onClick={incrementaContador}>Incrementar número</button> <br />
      <button onClick={decrementaContador}>Decrementar número</button>
      <h3>Contador: {contador}</h3>
  
    </div>
    
  )
}

export default App
