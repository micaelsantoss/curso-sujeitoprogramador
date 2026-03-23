import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ListaTarefas from './components/ListaTarefas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ListaTarefas/>
  </StrictMode>,
)
