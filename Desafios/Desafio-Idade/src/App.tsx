import './index.css'
import { useState } from 'react'

function App() {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<number>(0);

  function handleSubmit() {
    const yearActual = new Date().getFullYear();
    const yearBirth: number = parseInt(age);
    const result: number = yearActual - yearBirth;

    if(name === '' || age === '') {
      alert('Preencha todos os campos');
      return;
    } else if(isNaN(parseInt(age))) {
      alert('Digite um número válido');
      return;
    }

    setSigned(true);
    setResult(result);
  
  }

  return (
    <>
      <div className='container'>
        <h1>Descubra sua idade</h1>

        <div className="section">
          <label htmlFor="">Digite seu nome:</label><br />
          <input 
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)}
          /><br />

          <label htmlFor="">Digite seu ano de nascimento:</label><br />
          <input 
            type="text"
            value={age} 
            onChange={(e) => setAge(e.target.value)}
          /><br />

          <button onClick={handleSubmit}>Descorbir Idade</button>
        </div>

        {signed && (
          <div className="result">
          <p>Sua idade é {result} anos.</p>
          </div>
        )} 

      </div>
    </>
  )
}

export default App
