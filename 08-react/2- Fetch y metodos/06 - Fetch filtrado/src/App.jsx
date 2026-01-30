import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FetchFilter } from './components/FetchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FetchFilter></FetchFilter>
    </>
  )
}

export default App
