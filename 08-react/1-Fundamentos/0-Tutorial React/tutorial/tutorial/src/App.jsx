import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimerComponente } from './components/primerComponente'
import { SegundoComponente } from './components/segundoComponente'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <PrimerComponente></PrimerComponente>
      <SegundoComponente></SegundoComponente>
      <p>Esto es un repaso</p>
      
      

    </>
  )
}

export default App
