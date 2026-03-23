import { Button } from "./components/Button"

function App() {
  return (
    <div>
      <h1 className='header'>Testeee</h1>

      <Button onClick={() => alert("clicooou")} disabled={true}>
        Aperte aqui
      </Button>
    </div>
  )
}

export default App
